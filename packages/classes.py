"""
Source : 
Date : 30/01/2019
Auteur : Christian Doriath
Dossier : /Python34/MesDEv/Flask/FlaskBootstrap_BASE
Fichier : classes.py
Description : Module des classes uniquement et PAS des fonctions db SQLAlchemy;
trop compliqué à ce jour.

Mot cles : 
"""
from app import db
from random import *
import string

import locale
locale.setlocale(locale.LC_TIME,'')
 
import time
print (time.strftime('%A %d/%m/%Y %H:%M:%S'))
# résultat : mercredi 06/02/2019 12:00:50

# List all the fieldtypes in MySQL for the date & time :
# CREATE  TABLE `test`.`ban01` (

#   `idban01` INT NOT NULL AUTO_INCREMENT ,

#   `name` VARCHAR(45) NULL ,

#   `mydate` DATE NULL ,

#   `mydatetime` DATETIME NULL ,

#   `mytime` TIME NULL ,

#   `mytimestamp` TIMESTAMP NULL ,

#   `myyear` YEAR NULL ,

#   PRIMARY KEY (`idban01`) );




mytable4list=[
{'cardsrc':"static/images/CardPhoto1.jpg",'cardtitle':"Pizza reine",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn100',
'btn1text': "AjouterInd12€00", 'btn1ref' : 100,'btn1price':13.99, 'btn2text': "AjouterMax15€00", 'btn2ref' : 101,'btn2price':14.99,
'btn3text': "AjouterMeg18€00",'btn3ref' : 102,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto2.jpg",'cardtitle':"Pizza king",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn200',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 200,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 201,'btn2price':14.99,
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 202,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto3.jpg",'cardtitle':"Pizza méxicaine",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn300',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 300,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 301,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 302,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto4.jpg",'cardtitle':"Pizza saumon",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn400',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 400,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 401,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 402,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto5.jpg",'cardtitle':"Pizza classic",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn500',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 500,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 501,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 502,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto6.jpg",'cardtitle':"Pizza bretonne",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn600',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 600,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 601,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 602,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto6.jpg",'cardtitle':"Pizza hawai",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn700',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 700,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 701,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 702,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto8.png",'cardtitle':"Pizza 50/50",'cardtext':"Choisissez chaque côté !", 'btnDataref' : 'btn800',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 800,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 801,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 802,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto8.png",'cardtitle':"NP 3",'cardtext':"Compo 3 garn au choix", 'btnDataref' : 'btn900',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 900,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 901,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 902,'btn3price':17.99},
{'cardsrc':"static/images/CardPhoto7.png",'cardtitle':"Pizza merguez",'cardtext':"Fro Tomate jambon ...", 'btnDataref' : 'btn1000',
'btn1text': 'Ajouter Ind 12€00', 'btn1ref' : 1000,'btn1price':13.99, 'btn2text': 'Ajouter Max 15€00', 'btn2ref' : 1001,'btn2price':14.99, 
'btn3text': 'Ajouter Meg 18€00','btn3ref' : 1002,'btn3price':17.99}]





print ("""Les fonctions CRUDA (A pour Append) pour La liste et le dictionnaire.

 """)


print("================================ LISTE ================================")


print ("""Liste : Create 
ll = [1,2,3]    
 """)
ll = [1,2,3]

print ("""Liste : Retrieve
a = ll[1]
 """)
a = ll[1]

print ("""Liste : Update
ll[1]=2
 """)
ll[1]=2

print ("""Liste : Delete
del ll[1]
 """)
del ll[1]

print ("""Liste : Append
ll.append(4)
 """)
ll.append(4)

print ("Print la Liste : ", ll)

print("================================ Dictionnaire ================================")
print ("""Dictionnaire : Create 
MyDict = {'nom':'dori','prenom':'chris','age':53}
 """)
MyDict = {'nom':'dori','prenom':'chris','age':53}

print ("""Dictionnaire : Retrieve
a = MyDict['nom']
 """)
a = MyDict['nom']

print ("""Dictionnaire : Update
MyDict['nom']='doriath'
 """)
MyDict['nom']='doriath'

print ("""Dictionnaire : Delete
del MyDict['nom']
 """)
del MyDict['nom']

print ("""Dictionnaire : Append
MyDict['adresse']='62 rue des tilleuls' """)
MyDict['adresse']='62 rue des tilleuls'


print ("Print le Dictionnaire : ", MyDict)



class PreCmdList(object):
    def __init__(self):
        self.maListe=[]
    def AjouterDict(self, dict):
        return 3.1416 * self.rayon**2
    def DeleteDict(self, dict):
        return ('kick')

    def FournirTicket(self):
        return Ticket


# La classe 'PreCmdDict' represente le dict pour UNE SEULE ligne de 
# la commande du client. Elle reçoit 2 paramètres : 
# 1) Pour les pizzas non modifiées elle reçoit la référence de la pizza choisie
# et un texte vide.
# 2) Pour les pizzas modifiées elle reçoit DEUX paramètres : 
# la référence de la pizza choisie ET le texte des modifications effectuées. 
class PreCmdDict(object):
    def __init__(self,RefProduct):
        self.monDict={}
    def AjouterData(self, ref, text):
        return ('kiki')
        # rechercher la ref dans la liste 'mytable4list'(puis la dbf)
        # copier les data dans le dict
        






BeforeOrderLinesDict = {'id' : 0, 'Date' : '05/02/2019', 'Time' : '07:45:15', 'RefLine' : 0 ,
'RefProduct' : '200', 'Text' :'pizza Reine IND 12€00', 'Price' : 12.00  }

# BeforeOrderLinesList = PreCmdList()
# BeforeOrderLinesDict = PreCmdDict()



class EnteteCmds(db.Model):
    __tablename__ = 'EnteteCmds'
    iId = db.Column(db.Integer, primary_key=True, autoincrement=True) #identifiant unique de cet enregistrement
    dtDateTime = db.Column(db.DateTime)
    dDate = db.Column(db.Date)
    tTime = db.Column(db.Time)
    iDay = db.Column(db.Integer)
    iMonth = db.Column(db.Integer)
    iYear = db.Column(db.Integer)
    iHour = db.Column(db.Integer)
    iMinute = db.Column(db.Integer)
    iDow = db.Column(db.Integer)
    cDow = db.Column(db.String(12))
    iGlobalOrderNum = db.Column(db.Integer)
    iDayOrderNum = db.Column(db.Integer)
    """ Retourne la quantité en stock de cette référence
    """    
    def qte(p_ref):
        qte=db.Column(db.Integer)#quantité en stock
        return (p_value+5)





""" Chaque produit en stock occupe une ligne.
A l'entrée d'un produit dans le stock une nouvelle ligne est crée dans cette table. 
A la sortie d'un produit du stock (vente/mise au rebus) sa ligne est supprimée dans cette table. 
""" 
class Stocks(db.Model):
    __tablename__ = 'Stocks'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True) #identifiant unique de cet enregistrement
    ref=  db.Column(db.String(10))#référence du produit stocké ex:301 pizza reine taille IND
    emp=  db.Column(db.String(10))#emplacement du produit
    dDateEntree = db.Column(db.String(20))#date d'entrée du produit
    dDateSortie = db.Column(db.String(20))#date de sortie du produit
    # dDateEntree = db.Column(db.DATETIME)#30/01/2019 Difficile à utiliser
    # dDateSortie = db.Column(db.DATETIME)#30/01/2019 Difficile à utiliser
    """ Retourne la quantité en stock de cette référence
    """
    def qte(p_ref):
        qte=db.Column(db.Integer)#quantité en stock
        return (p_value+5)




class Emplacements(db.Model):
    __tablename__ = 'Emplacements'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    ref=  db.Column(db.String(10))#référence du produit
    






class Bananas(db.Model):
    __tablename__ = 'Bananas'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    prenom=  db.Column(db.String(50))#fichier source de la photo
    nom=db.Column(db.String(50))#nom de la pizza
    def AddFive(p_value):
        return (p_value+5)

dict_pizzabretonne={}

dict_pizzaméxicaine={}

class Products(db.Model):
    __tablename__ = 'Products'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    cardsrc=  db.Column(db.String(50))#fichier source de la photo
    cardtitle=db.Column(db.String(50))#nom de la pizza
    cardtext=db.Column(db.String(50))#liste des ingrédients
    btn1text= db.Column(db.String(50))#Libellé du bouton
    btn1ref = db.Column(db.Integer)#Référence de la pizza IND
    btn1price= db.Column(db.Float)#Prix de la pizza IND
    btn2text= db.Column(db.String(50))#Libellé du bouton MAXI
    btn2ref = db.Column(db.Integer)#Référence de la pizza MAXI
    btn2price= db.Column(db.Float)#Prix de la pizza MAXI
    btn3text= db.Column(db.String(50))#Libellé du bouton MEGA
    btn3ref = db.Column(db.Integer)#Référence de la pizza MEGA
    btn3price= db.Column(db.Float)#Prix de la pizza MEGA
    def AddProductList(p_list):
        #ajouter plusieurs produits, une list est passée
        for x in range(0,len(p_list)):
            Products.AddProductDict(p_list[x])
    def AddProductDict(p_dict):
        #ajouter un produit, un dict est passé
        Item = Products( cardsrc=p_dict['cardsrc'],
        cardtitle=p_dict['cardtitle'],
        cardtext=p_dict['cardtext'],
        btn1text=p_dict['btn1text'],
        btn1ref =p_dict['btn1ref'],
        btn2text=p_dict['btn2text'],
        btn2ref =p_dict['btn2ref'],
        btn3text=p_dict['btn3text'],
        btn3ref =p_dict['btn3ref'])
        db.session.add(Item) 
        db.session.commit()
    def DelProduct(p_ProductId):
        #supprimer un produit    
        Products.query.filter_by(id=p_ProductId).delete()
        db.session.commit()
    def ShowAllLines():
        return (Products.query.filter_by().all())
        #ici on retourne une liste 
        # si a=Products.ShowAllLines()
        # alors print(a[0].cardsrc) retourne le nom du fichier image
        # alors print(a[0].cardtext) retourne la liste des ingrédients

class BeforeOrderLines(db.Model):
    __tablename__ = 'BeforeOrderLines'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Date = db.Column(db.Date())
    Time = db.Column(db.Time()) 
    RefLine =  db.Column(db.Integer, unique=True, autoincrement=True)
    RefProduct = db.Column(db.String(10))
    Text = db.Column(db.String(50))
    Price = db.Column(db.Float)

    def TotalPrice():
        a=BeforeOrderLines.query.filter_by().all()
        mysum=0
        for x in range(0,len(a)):
            mysum=mysum+a[x].Price
        return mysum
    def AddOrderTotalLine(p_LineText = 'pizza reine 12€00',p_LinePrice = 12):#ajouter une ligne de commande
        Item = OrderLines( LineText = p_LineText,LinePrice = p_LinePrice)
        db.session.add(Item) 
        db.session.commit()

    def AddBeforeOrderLine(p_LineText = 'pizza reine 12€00',p_LinePrice = 12):#ajouter une ligne de commande
        Item = BeforeOrderLines( LineText = p_LineText,LinePrice = p_LinePrice)
        db.session.add(Item) 
        db.session.commit()
    #supprimer une ligne de commande
    def DelOrderLine(p_LineId):
        OrderLines.query.filter_by(id=p_LineId).delete()
        db.session.commit()
    def ShowAllLines():
        return (OrderLines.query.filter_by().all())
        #ici on retourne une liste 
        # si a=OrderLines.ShowAllLines()
        # alors print(a[0].id) retourne 0
        # alors print(a[0].LineText) retourne "id est init à 0"







class OrderLines(db.Model):
    __tablename__ = 'OrderLines'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    LineText = db.Column(db.String(50))
    LinePrice = db.Column(db.Float)
    def OrderTotal():
        a=OrderLines.query.filter_by().all()
        mysum=0
        for x in range(0,len(a)):
            mysum=mysum+a[x].LinePrice
        return mysum
    def AddOrderLine(p_LineText = 'pizza reine 12€00',p_LinePrice = 12):#ajouter une ligne de commande
        Item = OrderLines( LineText = p_LineText,LinePrice = p_LinePrice)
        db.session.add(Item) 
        db.session.commit()
    #supprimer une ligne de commande
    def DelOrderLine(p_LineId):
        OrderLines.query.filter_by(id=p_LineId).delete()
        db.session.commit()
    def ShowAllLines():
        return (OrderLines.query.filter_by().all())
        #ici on retourne une liste 
        # si a=OrderLines.ShowAllLines()
        # alors print(a[0].id) retourne 0
        # alors print(a[0].LineText) retourne "id est init à 0"

def dropit():
    db.drop_all()#Détruire toutes les tables

def docreateall():
    db.create_all()#Créer toutes les tables 
    #ajouter une ligne avec id=0
    Item = OrderLines( id=0, LineText = "id est init à 0",LinePrice = 0)
    db.session.add(Item) 
    db.session.commit()
    I = Products( id=0,cardsrc = "id est init à 0")
    db.session.add(I) 
    db.session.commit()
    b = Bananas( id=0,prenom = "index = 0", nom ="index = 0")
    db.session.add(b) 
    db.session.commit()
    s = Stocks( id=0,ref=  "",emp=  "",dDateEntree = "30/01/2019", dDateSortie = "30/01/2019")
    db.session.add(s) 
    db.session.commit()


def add10lines():#ajouter 10 lignes au contenu aléatoire
    for i in range(10):
        AddOrderLine(p_LineText = (randstr(5)+' '+randstr(10)),p_LinePrice = randint(10,18))

def randstr(nbr):
    """ generer un string aleatoire de largeur donnee"""
    return ''.join([choice(string.ascii_letters + string.digits) for n in range(nbr)])
    # return ''.join([random.choice(string.ascii_letters + string.digits) for n in range(nbr)])

def selectsql():#utiliser le langage SQL : select.
    r=db.engine.execute('select cPrenom, cNom from Users') 
    db.session.commit()
    return (r)

def selectfieldsql():#utiliser le langage SQL : select.
    r=db.engine.execute('select iId, cNom from Users') 
    db.session.commit()
    return (r)

def insertsql():#utiliser le langage SQL : insert.
    r=db.engine.execute('insert into Users (cPrenom, cNom) values ("Marc","Gay") ')
    db.session.commit()


def addbans():#ajouter 10 pizza reine dans la table 
    for i in range(10):
        data1 = Bans(cData=randstr(10))
        db.session.add(data1)
    db.session.commit()

