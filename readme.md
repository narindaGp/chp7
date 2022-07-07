# Lanjutan game hub berdasarkan materi chapter 7 Binar FSW bootcamp
<br />

---------------------------
## Terminal setup
---------------------------

### Mulai server
```terminal
npm start
```

### Setup server
```terminal
npm install
npm run dbCreate
npm run migrate
```
<br> <br>

---------------------------
## Sequelize
---------------------------

### Isi model generate
```terminal
---- contoh format model generate ----
npx sequelize-cli model:generate --name (model name singular tanpa kurung) --attributes (column/ key name):(data type),varchar:string,number:integer,date:date,text:text,boolean:boolean

---------------------------

npx sequelize-cli model:generate --name User --attributes username:string,password:string,role:string,email:string,isSuperAdmin:boolean

npx sequelize-cli model:generate --name Biodatum --attributes UserId:integer,firstname:string,lastname:string,gender:string,place:string,dateOfBirth:date

npx sequelize-cli model:generate --name Game_History --attributes UserId:integer,partner:string,point:integer,outcome:string,playedAt:date

```