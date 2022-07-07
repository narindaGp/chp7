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

### Seed data users dan biodata
```terminal
npm run seed
```
mohon diperhatikan seed ini hanya bisa dilakukan sekali di awal database dan migration dibuat karena user Id yang dibuat masuh statis

### Restart server
```terminal
npm dbDrop
npm run dbCreate
npm run migrate
npm run seed
```
<br> <br>

---------------------------
## Sequelize
---------------------------

### Terminal model generate
```terminal
---- contoh format model generate ----
npx sequelize-cli model:generate --name (model name singular tanpa kurung) --attributes (column/ key name):(data type),varchar:string,number:integer,date:date,text:text,boolean:boolean

---------------------------

npx sequelize-cli model:generate --name User --attributes username:string,password:string,role:string,email:string,isSuperAdmin:boolean

npx sequelize-cli model:generate --name Biodatum --attributes UserId:integer,firstname:string,lastname:string,gender:string,place:string,dateOfBirth:date

npx sequelize-cli model:generate --name Game_History --attributes UserId:integer,partner:string,point:integer,outcome:string,playedAt:date

```
### Terminal create seed
```terminal
npx sequelize seed:create --name seed-user
```