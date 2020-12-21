var MongoClient = require('mongodb').MongoClient;
var Url = "mongodb+srv://tanzimDB:aqdZmg6GQeHs3S33@cluster0.zarhs.mongodb.net?retryWrites=true&w=majority";
var Unf = { useUnifiedTopology: true }

MongoClient.connect(Url, Unf, function(error, MyMongoClient) {

    if (error) {
        console.log("Connection Unsuccessfull")

    } else {
        console.log("Connection Successfull");
        //InsertData(MyMongoClient);
        DeleteData(MyMongoClient);

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
        gender: "male",
        city: "Bogota",
        phone_no: "0722224750"
    };

    MyCollection.insertMany([MyData, MyData1, MyData2, MyData3, MyData4], function (error) {
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