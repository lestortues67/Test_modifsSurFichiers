document.addEventListener('DOMContentLoaded', () => {
    // ------------------ Sélection des éléments DOM ------------------
    const fileList = document.getElementById('fileList');
    const createFolderBtn = document.getElementById('createFolderBtn');
    const rootDropZone = document.getElementById('rootDropZone');
    const sortSelect = document.getElementById('sortSelect');
    const createFolderForm = document.getElementById('createFolderForm');
    const createFolderModalEl = document.getElementById('createFolderModal');
    const folderNameInput = document.getElementById('folderNameInput');

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    // ------------------ Gestion fichiers et dossiers ------------------
    window.addEventListener("message", (event) => {
        if(event.data?.type==='refreshFiles') loadFilesAndFolders();
    });
    window.addEventListener("storage", (event) => {
        if(event.key==="refreshFiles") loadFilesAndFolders();
    });

    async function loadFilesAndFolders() {
        if(!fileList) return;
        try {
            const res = await fetch('/list_files_and_folders');
            let data = await res.json();
            const method = sortSelect ? sortSelect.value : 'name';
            data = sortItems(data, method);
            fileList.innerHTML = '';
            if(data && data.length) renderFilesAndFolders(data, fileList);
            else fileList.innerHTML = `<li class="p-2 text-muted">Aucun fichier ou dossier.</li>`;
        } catch(e){
            console.error(e);
            fileList.innerHTML = `<li class="p-2 text-danger">Erreur chargement fichiers</li>`;
        }
    }

    function sortItems(items, method){
        if(method === 'name'){
            items.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        } else if(method === 'date_asc'){
            items.sort((a,b) => (a.ctime || 0) - (b.ctime || 0));
        } else if(method === 'date_desc'){
            items.sort((a,b) => (b.ctime || 0) - (a.ctime || 0));
        }
        items.forEach(item => {
            if(item.children && item.children.length){
                sortItems(item.children, method);
            }
        });
        return items;
    }

    if(sortSelect){
        sortSelect.addEventListener('change', loadFilesAndFolders);
    }

    function renderFilesAndFolders(items, parentEl) {
        items.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-unstyled');

            const itemWrapper = document.createElement('div');
            itemWrapper.classList.add('d-flex', 'align-items-center', 'py-1', 'px-2');

            const trashIcon = document.createElement('i');
            trashIcon.classList.add('bi', 'bi-trash3-fill', 'text-danger', 'ms-auto', 'd-none', 'delete-icon');

            trashIcon.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (confirm(`Voulez-vous vraiment supprimer "${item.name}" ?`)) {
                    try {
                        const res = await fetch('/delete_file_or_folder', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ path: item.path })
                        });
                        const result = await res.json();
                        if (result.success) {
                            loadFilesAndFolders();
                        }
                    } catch (error) {
                        console.error(`Erreur lors de la suppression de "${item.name}".`);
                    }
                }
            });

            itemWrapper.addEventListener('mouseover', () => { trashIcon.classList.remove('d-none'); });
            itemWrapper.addEventListener('mouseout', () => { trashIcon.classList.add('d-none'); });

            if (item.is_dir) {
                li.classList.add('folder-item', 'text-black');
                const uniqueId = `folder-${item.path.replace(/[^a-zA-Z0-9]/g, '-')}`;
                const hasChildren = item.children && item.children.length > 0;

                const link = document.createElement('a');
                link.classList.add('text-decoration-none', 'text-black', 'flex-grow-1');
                link.href = "#";

                if (hasChildren) {
                    link.setAttribute('data-bs-toggle', 'collapse');
                    link.setAttribute('data-bs-target', `#${uniqueId}`);
                    link.setAttribute('aria-expanded', 'false');
                    link.setAttribute('aria-controls', uniqueId);
                    link.innerHTML = `<i class="bi bi-caret-right-fill me-1 folder-toggle-icon"></i>` + `<i class="bi bi-folder-fill me-2"></i>${item.name}`;
                } else {
                    link.innerHTML = `<i class="bi bi-folder-fill me-2"></i>${item.name}`;
                }

                itemWrapper.appendChild(link);
                itemWrapper.appendChild(trashIcon);
                li.appendChild(itemWrapper);

                if (hasChildren) {
                    const childUl = document.createElement('ul');
                    childUl.id = uniqueId;
                    childUl.classList.add('list-unstyled', 'collapse', 'ms-4');
                    li.appendChild(childUl);
                    renderFilesAndFolders(item.children, childUl);

                    const collapseElement = document.getElementById(uniqueId);
                    if (collapseElement) {
                        collapseElement.addEventListener('show.bs.collapse', () => {
                            const icon = link.querySelector('.folder-toggle-icon');
                            if (icon) icon.classList.replace('bi-caret-right-fill', 'bi-caret-down-fill');
                        });
                        collapseElement.addEventListener('hide.bs.collapse', () => {
                            const icon = link.querySelector('.folder-toggle-icon');
                            if (icon) icon.classList.replace('bi-caret-down-fill', 'bi-caret-right-fill');
                        });
                    }
                }

                itemWrapper.addEventListener('dragover', e => { e.preventDefault(); });
                itemWrapper.addEventListener('drop', e => {
                    e.preventDefault();
                    const source = e.dataTransfer.getData('text/plain');
                    if (!source || source === item.path) return;
                    fetch('/move_file', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ source_path: source, dest_folder_path: item.path })
                    }).then(loadFilesAndFolders).catch(console.error);
                });
            } else {
                li.classList.add('file-item');
                const link = document.createElement('a');
                link.href = `/files/${encodeURIComponent(item.path)}`;
                link.target = "_blank";
                link.draggable = true;
                link.classList.add('text-decoration-none', 'text-black', 'flex-grow-1');
                link.innerHTML = `<i class="bi bi-file-earmark-fill me-2"></i>${item.name}`;
                link.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', item.path); });

                itemWrapper.appendChild(link);
                itemWrapper.appendChild(trashIcon);
                li.appendChild(itemWrapper);
            }

            parentEl.appendChild(li);
        });
    }

    // ------------------ Création de dossier ------------------
    if (createFolderBtn && createFolderForm) {
        // Focus automatique sur l'input
        if (createFolderModalEl && folderNameInput) {
            createFolderModalEl.addEventListener('shown.bs.modal', () => {
                folderNameInput.focus();
            });
        }

        createFolderForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const folderName = folderNameInput.value.trim();
            if (!folderName) return;

            try {
                const res = await fetch('/create_folder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ folder_name: folderName })
                });
                const result = await res.json();

                if (result.success) {
                    loadFilesAndFolders();
                    const modal = bootstrap.Modal.getOrCreateInstance(createFolderModalEl);
                    modal.hide();
                    createFolderForm.reset();
                }
            } catch (e) {
                console.error("Erreur création dossier");
            }
        });
    }

    // ------------------ Déposer un fichier à la racine ------------------
    if (rootDropZone) {
        rootDropZone.addEventListener('dragover', e => { e.preventDefault(); rootDropZone.classList.add('bg-light'); });
        rootDropZone.addEventListener('dragleave', e => { rootDropZone.classList.remove('bg-light'); });
        rootDropZone.addEventListener('drop', e => {
            e.preventDefault();
            rootDropZone.classList.remove('bg-light');
            const source = e.dataTransfer.getData('text/plain');
            if (!source) return;
            fetch('/move_file', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ source_path: source, dest_folder_path: '' })
            }).then(loadFilesAndFolders).catch(console.error);
        });
    }

    // ------------------ Recherche de fichiers ------------------
    async function performSearch() {
        const query = searchInput.value.trim();
        if (!query) {
            searchResults.innerHTML = `<p class="text-muted text-center">Sélectionnez un fichier à gauche ou lancez une recherche via la barre en haut.</p>`;
            return;
        }

        try {
            const res = await fetch('/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: query })
            });
            const data = await res.json();
            renderSearchResults(data, query);
        } catch (e) {
            console.error(e);
        }
    }

    function renderSearchResults(results, query) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.innerHTML = `<p class="text-muted text-center">Aucun résultat trouvé pour "${query}".</p>`;
            return;
        }

        const groupedResults = {};
        results.forEach(item => {
            if (!groupedResults[item.file]) groupedResults[item.file] = [];
            groupedResults[item.file].push(item);
        });

        for (const file in groupedResults) {
            const fileGroup = document.createElement('div');
            fileGroup.classList.add('mb-3', 'p-2', 'border', 'rounded', 'bg-light');

            const fileTitle = document.createElement('a');
            fileTitle.href = `/files/${encodeURIComponent(file)}`;
            fileTitle.target = "_blank";
            fileTitle.classList.add('d-block', 'text-decoration-none', 'text-black');
            fileTitle.innerHTML = `<h5><i class="bi bi-file-earmark-text-fill me-2"></i><strong>${file}</strong></h5>`;
            fileGroup.appendChild(fileTitle);

            const fileOccurrences = document.createElement('ul');
            fileOccurrences.classList.add('list-unstyled', 'mb-0');

            groupedResults[file].forEach(occurrence => {
                const li = document.createElement('li');
                const regex = new RegExp(query, 'gi');
                const highlightedSnippet = occurrence.snippet.replace(regex, `<span class="highlight">$&</span>`);
                li.innerHTML = `... ${highlightedSnippet} ...`;
                fileOccurrences.appendChild(li);
            });

            fileGroup.appendChild(fileOccurrences);
            searchResults.appendChild(fileGroup);
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    // ------------------ Chargement initial ------------------
    loadFilesAndFolders();
});




