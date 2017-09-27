var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');

// var bcrypt = require('bcrypt-nodejs');
// var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/Anony', { useMongoClient: true, promiseLibrary: global.Promise });
mongoose.set('debug', true);


var BlogSchema = mongoose.Schema({ 
        
        content: String 
    
    }, { timestamps: { createdAt: 'created_at' } } );

var BlogPost = mongoose.model('BlogPost', BlogSchema /* <= SCHEMA IN JSON */ );

var post1 = new BlogPost({ content: 'Hellloooooooo....'});

post1.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    
    BlogPost.findOne( { } , function (err, blog) {

        if (err) return handleError(err);
        console.log(blog);
    }) 





  }
});


server.listen(3000, function(){
  console.log('listening on *:3000');

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});

/*

var schema = mongoose.Schema({
      //NIC : { type: Number, index: true },
      FirstName : String,
      DueDate : Date,
      Area : String,
      //Group : { type: String , index: true },
      ProductID : String,
      Trans : Array
})

var user = mongoose.model('user',schema);

io.on('connection', function(socket){
  console.log('a user connected');  

  socket.on('sending', function(data){      
        console.log(data);
      
        io.emit('recieve', data);    

      
        if(data=="exit"){
        	socket.disconnect( console.log('sender disconnected'));
        }
  });
    
    
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

*/