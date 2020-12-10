const app = express();

app.use(express.static(__dirname+'/dist/gypzlab-frontend'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/gypzlab-frontend/index.html'));
});

app.listen(process.env.PORT || 8080);