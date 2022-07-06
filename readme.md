# Lanjutan game hub berdasarkan materi chapter 7 Binar FSW bootcamp

## Untuk mulai server
```terminal
npm start
```

## Setup server dengan cara
```terminal
npm install
npm run dbCreate
```

### Isi model generate
```terminal
--- contoh format model generate
npx sequelize-cli model:generate --name (model name singular tanpa kurung) --attributes (column/ key name):(data type),varchar:string,number:integer,date:date,text:text,boolean:boolean


npx sequelize-cli model:generate --name (model name singular tanpa kurung) --attributes (column/ key name):(data type),varchar:string,number:integer,date:date,text:text,boolean:boolean

```