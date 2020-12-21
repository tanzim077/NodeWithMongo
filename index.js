var MongoClient = require('mongodb').MongoClient;
var Url = "mongodb+srv://tanzimDB:aqdZmg6GQeHs3S33@cluster0.zarhs.mongodb.net?retryWrites=true&w=majority";
var Unf = { useUnifiedTopology: true }

MongoClient.connect(Url, Unf, function(error, MyMongoClient) {

    if (error) {
        console.log("Connection Unsuccessfull")

    } else {
        console.log("Connection Successfull");
        // var i;
        // for ( i = 1; i<5; i++){
        //     InsertData(MyMongoClient);
        //     InsertData(MyMongoClient);
        //     InsertData(MyMongoClient);
        // }
        //DeleteData(MyMongoClient);
        // DeleteAllData(MyMongoClient);
        // FindOneWithOutCondition(MyMongoClient);
        // FindOneWithCondition(MyMongoClient);
        // FindAllWithCondition(MyMongoClient);
        // FindAllWithProjection(MyMongoClient)
        // FindManyWithCondition(MyMongoClient)
    }
});

function InsertData(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');
    var MyData = {
        name: "Tanzim Ahmed",
        gender: "Male",
        city: "Dhaka",
        phone_no: "01822220350"
    };
    var MyData1 = {
        name: "Kevin Nixon",
        gender: "Male",
        city: "Copenhegen",
        phone_no: "36549891"
    };
    var MyData2 = {
        name: "Ashley Alexis",
        gender: "Female",
        city: "New York",
        phone_no: "2232230350"
    };
    var MyData3 = {
        name: "Sammera Ansari",
        gender: "Female",
        city: "Chennai",
        phone_no: "9475220350"
    };
    var MyData4 = {
        name: "Robert Huarez",
        gender: "Male",
        city: "Bogota",
        phone_no: "0722224750"
    };
    var MyData5 = {
        name: "Arman Azam",
        gender: "Male",
        city: "Dhaka",
        phone_no: "01822220350"
    };
    var MyData6 = {
        name: "Nixon Ali",
        gender: "Male",
        city: "Bogota",
        phone_no: "36549891"
    };
    var MyData7 = {
        name: "Ashley Diana Alexis",
        gender: "Female",
        city: "Bogota",
        phone_no: "2232230350"
    };
    var MyData8 = {
        name: "Jeny Ansari",
        gender: "Female",
        city: "Dhaka",
        phone_no: "9475220350"
    };
    var MyData9 = {
        name: "Robert Mendes Huarez",
        gender: "Male",
        city: "New York",
        phone_no: "0722224750"
    };

    MyCollection.insertMany([MyData, MyData1, MyData2, MyData3, MyData4,MyData5,MyData6,MyData7,MyData8,MyData9], function (error) {
        if (error) {
            console.log("Data insertion Unsuccessfull");
        } else {
            console.log("Data insertion Successfull");
        }
    })
}

function DeleteData(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');
    var DeleteItem = {gender : "Male"};

    MyCollection.deleteMany(DeleteItem, function (error){
        if (error){
            console.log("Data Delete Unsuccessfull");
        }else{
            console.log("Data Deleted Successfull")
        }
    })

}

function DeleteAllData(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');

    MyCollection.deleteMany(function (error, ResultObj){
        if (error){
            console.log("Data Delete Unsuccessfull");
        }else{
            console.log(ResultObj.result.n + " Item Data Deleted")
        }
    })
}

function FindOneWithOutCondition(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');
    var MyData ={}

    MyCollection.findOne(MyData,  function (error, result){
        if (error){
            console.log("No Data Found");
        }else{
            console.log(result);
        }
    })
}

function FindOneWithCondition(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');
    var MyData ={city : "Bogota"};

    MyCollection.findOne(MyData, function (error, result){
        if (error){
            console.log("No Data Found");
        }
        else{
            // var number = parseInt(ResultObj.result.n);
            // if (number > 1){
            //     console.log(result.n + " Items found")
            // }
            //  else {
            //     console.log(ResultObj.result.n + " Item found")
            // }
            console.log(result);
        }
    })
}

function FindAllWithCondition(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');
   //var MyData ={city : "Bogota"};

    MyCollection.find().toArray(function (error, result) {
        if (error){
            console.log("No Data Found");
        }
        else{
            // var number = parseInt(ResultObj.result.n);
            // if (number > 1){
            //     console.log(ResultObj.result.n + " Items found")
            // }
            //  else {
            //     console.log(ResultObj.result.n + " Item found")
            // }
            console.log(result);
        }
    })
}

function FindAllWithProjection(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');
    var MyData ={};
    var Projection = {projection: {city:""}};


    MyCollection.find(MyData, Projection).toArray(function (error, result) {
        if (error){
            console.log("No Data Found");
        }
        else{
            // var number = parseInt(ResultObj.result.n);
            // if (number > 1){
            //     console.log(ResultObj.result.n + " Items found")
            // }
            //  else {
            //     console.log(ResultObj.result.n + " Item found")
            // }
            console.log(result);
        }
    })
}

function FindManyWithCondition(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("Demo");
    var MyCollection = MyDataBase.collection('employee');
    var MyData ={city : "Bogota"};

    MyCollection.find(MyData).toArray(function (error, result) {
        if (error){
            console.log("No Data Found");
        }
        else{
            // var number = parseInt(ResultObj.result.n);
            // if (number > 1){
            //     console.log(ResultObj.result.n + " Items found")
            // }
            //  else {
            //     console.log(ResultObj.result.n + " Item found")
            // }
            console.log(result);
        }
    })
}