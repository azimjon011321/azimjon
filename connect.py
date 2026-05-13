# python -m venv venv   #virtual muhit yaratadi
# venv\Scripts\activate  #virtual muhitni ishga tushirish windows uchun
# pip lisst  #muhit ichidagi ornatilgan kutubxonalr royxatini korish
# pip freeze>ruquirements.txt   #ornatilgan kutubxonalarni txt faylga yozib olish
# pip install -r requirements.txt   #txt fayl ichidagi kutubxonalarni ornatish
import psycopg2


conn = psycopg2.connect(
    host='localhost',
    port=5432,
    database='postgres',
    user='postgres',
    password='2011'
)

cursor = conn.cursor()


print('Mufaqqiyatli ulandi!')

cursor.close()
conn.close()            