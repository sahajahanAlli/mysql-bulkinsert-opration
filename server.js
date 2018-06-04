 const connectdb=require('./db.connect')

//checking if table exits or not. if not create the table before insert operation.
connectdb.query('desc person',(err,result,fields)=>{
    if(err){
        console.log(err)
        if(err['errno']==1146){
        console.log('table absent')
        let querycreate='CREATE TABLE IF NOT EXISTS `person` ( `first_name` varchar(30) NOT NULL,`last_name` varchar(30) NOT NULL)'
      console.log(querycreate)
        connectdb.query(querycreate,(err,result,fields)=>{
            if(err)
            console.log(err)
            console.log(result)
        })
    }
}
})
 

//data to be inserted into table
var values = [
                [ 'Jack', 'Patel'],
                [ 'Aftab', 'Ali'],
                
];
 
// query for insert data to the person table
let query = "INSERT INTO person ( first_name, last_name) VALUES ?";
 
connectdb.query(query, [values], function(err, result) {
    if(err)
    console.log(err)
    console.log(result);
});

