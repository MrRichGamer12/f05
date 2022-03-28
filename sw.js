self.addEventListener("install",function(e){
    console.log("service worker instaling",e)
})
self.addEventListener("activate",function(e){
    console.log("service worker activating",e);
    return self.clients.claim();
})
self.addEventListener("fetch",function(e){
    console.log("service worker is fetching something",e)
})