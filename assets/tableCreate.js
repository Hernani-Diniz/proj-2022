
// Create table Sensor
app.get('/createTableSensor', (req, res) => {
    let sql = 'CREATE TABLE Sensor(idSensor int AUTO_INCREMENT, Nome VARCHAR(50), Localizacao VARCHAR(255), Descricao VARCHAR(255), PRIMARY KEY(idSensor))';
    db.query(sql, (err, result) =>{
      if (err) throw err;
      console.log(result);
      res.send('Sensor Table created...'); 
    });
  });
  
  // Create table User
  app.get('/createTableUser', (req, res) => {
    let sql = 'CREATE TABLE User(idUser int AUTO_INCREMENT, Nome VARCHAR(255), Contacto CHAR(9), Email VARCHAR(150), Password VARCHAR(255), PRIMARY KEY(idUser))';
    db.query(sql, (err, result) =>{
      if (err) throw err;
      console.log(result);
      res.send('User Table created...'); 
    });
  });
  
  
  // Create table Leitura
  app.get('/createTableLeitura', (req, res) => {
    let sql = 'CREATE TABLE Leitura(idLeitura int AUTO_INCREMENT, temp FLOAT, hum Float, dataLeitura DATETIME, PRIMARY KEY(idLeitura))';
    db.query(sql, (err, result) =>{
      if (err) throw err;
      console.log(result);
      res.send('Leitura Table created...'); 
    });
  });
  
  