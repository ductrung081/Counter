var interval;
var namex;

self.addEventListener('message', function(e){
    let type = e.data.type;
    switch (type) {
        case 'start':
            processInterval();
            interval = setInterval(function(){
                processInterval();
            }, 1000);
            break;
        case 'stop':
            clearInterval(interval);
            break;
        
        case 'set_data':
            namex = e.data.name;
        break;
    };
}, false);

function processInterval(){
    self.postMessage({action: 2, name:namex});
}