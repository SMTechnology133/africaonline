// JavaScript Document
//farm animals starts from here
const data = {
    farm: [
        {name:"a Dog.", ch:"Galu.", img:"https://smtechnology133.github.io/images/dog.png"},
        
        {name:"a Cow.", ch:"Ng'ombe.", img:"https://smtechnology133.github.io/images/cow.png"},
        
        {name:"a Goat.", ch:"Mbuzi.", img:"https://smtechnology133.github.io/images/goat.png"},
        
           {name:"a Horse.", ch:"Kavalo.", img:"https://smtechnology133.github.io/images/horse.png"},
           
             {name:"a Pig.", ch:"Nkhumba.", img:"https://smtechnology133.github.io/images/pig.png"},
             
               {name:"a Sheep.", ch:"Nkhosa.", img:"https://smtechnology133.github.io/images/sheepp.png"},
               
                 {name:"a Zebra.", ch:"Mbidzi.", img:"https://smtechnology133.github.io/images/zebra.png"},
                 
               {name:"a Cat.", ch:"Mphaka.", img:"https://smtechnology133.github.io/images/cat.jpeg"},
               
        {name:"a Fish.", ch:"Nsomba.", img:"https://smtechnology133.github.io/images/fish.jpg"},
        
         {name:"a Guinea Fowl.", ch:"Nkhanga.", img:"https://smtechnology133.github.io/images/guineafowl.jpg"}, 
         
          {name:"a Guinea Pig.", ch:"Mbira.", img:"https://smtechnology133.github.io/images/guineapig.jpg"},
          
         {name:"a Rabbit.", ch:"Kalulu.", img:"https://smtechnology133.github.io/images/rabbit.jpg"}, 
         
         {name:"a Chicken.", ch:"Nkhuku.", img:"https://smtechnology133.github.io/images/chickenn.png"}, 
         
            {name:"a Parrot.", ch:"Paroti.", img:"https://smtechnology133.github.io/images/parrot.jpg"}, 
            
      {name:"a Qail.", ch:"Chinziri.", img:"https://smtechnology133.github.io/images/qail.jpg"},       
    ],
    //farm animals ends here
    
//_______________________________    
    
    //wild animals starts from here
    wild: [
        {name:"a Lion.", ch:"Mkango.", img:"https://smtechnology133.github.io/images/lion.png"},
        
        {name:"an Elephant.", ch:"Njovu.", img:"https://smtechnology133.github.io/images/elephant.png"},
        
         {name:"a Unicorn.", ch:"Yunikoni.", img:"https://smtechnology133.github.io/images/unicorn.png"},
         
          {name:"a Hyena.", ch:"Fisi.", img:"https://smtechnology133.github.io/images/hyena.png"},
          
           {name:"a Whale.", ch:"Chinsomba.", img:"https://smtechnology133.github.io/images/whale.png"},
           
            {name:"a Shark.", ch:"Shaki.", img:"https://smtechnology133.github.io/images/shark.png"},
            
             {name:"an Otter.", ch:"Ota.", img:"https://smtechnology133.github.io/images/otter.png"},
             
              {name:"a Panther.", ch:"Panther.", img:"https://smtechnology133.github.io/images/patherr.png"},
              
               {name:"a Dragon.", ch:"Chinjoka.", img:"https://smtechnology133.github.io/images/dragon.png"},
               
                 {name:"Anaconda.", ch:"Anakonda.", img:"https://smtechnology133.github.io/images/anaconda.png"},
                 
              {name:"a Python.", ch:"Nsato.", img:"https://smtechnology133.github.io/images/python.png"},
                   
                                {name:"a Snake.", ch:"Njoka.", img:"https://smtechnology133.github.io/images/snake.png"},
                                                           {name:"a Crab.", ch:"Nkhanu.", img:"https://smtechnology133.github.io/images/crab.png"},
                             
                                 {name:"a Crocodile.", ch:"Ng'ona.", img:"https://smtechnology133.github.io/images/crocodile.png"},
                                                            {name:"a Grasshopper.", ch:"Chiwala.", img:"https://smtechnology133.github.io/images/grasshopper.png"},
                               
       {name:"a Leopard.", ch:"Kambuku.", img:"https://smtechnology133.github.io/images/leopard.png"},
                                                          {name:"a Lobster.", ch:"Lobusitara.", img:"https://smtechnology133.github.io/images/lobster.png"},
                                                        {name:"a Monkey.", ch:"Nyani.", img:"https://smtechnology133.github.io/images/monkeyy.png"},
                                                                                                             {name:"a Seal.", ch:"Silu.", img:"https://smtechnology133.github.io/images/seal.png"},
                                                                                                             
            {name:"a Shrimp.", ch:"Shirimpi.", img:"https://smtechnology133.github.io/images/shrimp.png"},
            
     {name:"a Slug.", ch:"Silagi.", img:"https://smtechnology133.github.io/images/slug.png"},
                                  {name:"a Snail.", ch:"Nkhono.", img:"https://smtechnology133.github.io/images/snail.png"},
                             
               {name:"a Spider.", ch:"Kangaude.", img:"https://smtechnology133.github.io/images/spider.png"}, 
           
            {name:"an Antelope.", ch:"Gwape.", img:"https://smtechnology133.github.io/images/antelope.jpg"},
            
            {name:"a Pangolin.", ch:"Pangolini.", img:"https://smtechnology133.github.io/images/pangolin.jpg"},
               
           {name:"an Armadillo.", ch:"Amadilo.", img:"https://smtechnology133.github.io/images/armadillo.jpeg"},
               
          {name:"a Bat.", ch:"M'leme.", img:"https://smtechnology133.github.io/images/bat.webp"},
              
             {name:"a Buffalo.", ch:"Njati.", img:"https://smtechnology133.github.io/images/buffalo.jpeg"},
             
              {name:"a Camel.", ch:"Ngamira.", img:"https://smtechnology133.github.io/images/camel.jpeg"},
              
           {name:"a Chameleon.", ch:"Nanzikambe.", img:"https://smtechnology133.github.io/images/chameleon.jpg"},
           
           {name:"a Chimpazee.", ch:"Nyani.", img:"https://smtechnology133.github.io/images/chimpazee.jpg"},
           
           {name:"a Gecko.", ch:"Nalimata.", img:"https://smtechnology133.github.io/images/gecko.jpeg"},
           
          {name:"a Gorilla.", ch:"Gorila.", img:"https://smtechnology133.github.io/images/gorilla.jpg"},
          
          {name:"a Jackal.", ch:"Nkhandwe.", img:"https://smtechnology133.github.io/images/jackal.jpg"},
          
          {name:"a Kangaroo.", ch:"Kangalu.", img:"https://smtechnology133.github.io/images/kangaroo.jpg"},
          
         {name:"a Kangaroo Rat.", ch:"Mbewa ya Kangalu.", img:"https://smtechnology133.github.io/images/kangarooRat.jpg"},
         
         {name:"a Lizard.", ch:"Buluzi.", img:"https://smtechnology133.github.io/images/lizard.jpg"},
         
         {name:"a Llama.", ch:"Lama.", img:"https://smtechnology133.github.io/images/llama.jpg"},
         
         {name:"a Tortoise.", ch:"Kamba.", img:"https://smtechnology133.github.io/images/tortoise.jpg"},
         
         {name:"a Rhinoceros.", ch:"Chipembere.", img:"https://smtechnology133.github.io/images/rhinoceros.jpeg"},
         
         {name:"a Tiger.", ch:"Nyalugwe.", img:"https://smtechnology133.github.io/images/tiger.jpg"},
         
         {name:"a Bear.", ch:"Chimbalangondo.", img:"https://smtechnology133.github.io/images/bear.jpg"},
         
            {name:"a Dinosaur.", ch:"Dinosa.", img:"https://smtechnology133.github.io/images/dinosaur.jpg"}, 
            
        {name:"an Eel.", ch:"Njoka yam'madzi.", img:"https://smtechnology133.github.io/images/eel.jpg"},
        
        {name:"a Hedge Hog.", ch:"Kanungu.", img:"https://smtechnology133.github.io/images/hedgehog.jpg"},
        
         {name:"a Hippopotamus.", ch:"Mvuwu.", img:"https://smtechnology133.github.io/images/hippopotamus.jpg"},
         
          {name:"a Honey Bugger.", ch:"Hane Baga.", img:"https://smtechnology133.github.io/images/honeybugger.jpg"},
          
          {name:"a Panda.", ch:"Panda.", img:"https://smtechnology133.github.io/images/panda.jpg"},
          
          {name:"a Porcupine.", ch:"Nungu.", img:"https://smtechnology133.github.io/images/porcupine.jpg"},
          
          {name:"a Squirrel.", ch:"Sikwalelu.", img:"https://smtechnology133.github.io/images/squirrel.jpg"},                                                                                                                                                                 
    ],
    //wild animals ends here
    
//_______________________________    
    
    //Birds starts from here
    birds: [
        {name:"a Chicken.", ch:"Nkhuku.", img:"https://smtechnology133.github.io/images/chickenn.png"},
        
        {name:"a Duck.", ch:"Bakha.", img:"https://smtechnology133.github.io/images/duck.png"},
        
         {name:"a Hawk.", ch:"Chiomba nkhanga.", img:"https://smtechnology133.github.io/images/hawk.png"},
         
          {name:"an Owl.", ch:"Kadzidzi.", img:"https://smtechnology133.github.io/images/owl.png"},
          
            {name:"a Swan.", ch:"Swani.", img:"https://smtechnology133.github.io/images/swan.png"},
            
              {name:"a Penguin.", ch:"Penguini.", img:"https://smtechnology133.github.io/images/penguinn.png"},
              
                {name:"a Peacock.", ch:"Pikoku.", img:"https://smtechnology133.github.io/images/peacock.png"},
    
    {name:"an Albatross.", ch:"Albatrosi.", img:"https://smtechnology133.github.io/images/albatross.jpeg"},
    
    {name:"a Dove.", ch:"Nkhunda.", img:"https://smtechnology133.github.io/images/dove.jpg"},
    
    {name:"a Parrot.", ch:"Paroti.", img:"https://smtechnology133.github.io/images/parrot.jpg"},
    
    {name:"an Eagle.", ch:"Mphungu.", img:"https://smtechnology133.github.io/images/eagle.jpg"},
    
    {name:"a Guinea Fowl.", ch:"Nkhanga.", img:"https://smtechnology133.github.io/images/guineafowl.jpg"},
    
    {name:"a Kiwi.", ch:"Kiwi.", img:"https://smtechnology133.github.io/images/kiwi.jpg"},
    
    {name:"an Ostrich.", ch:"Nthiwatiwa.", img:"https://smtechnology133.github.io/images/ostrich.jpg"},
    
    {name:"a Pelican.", ch:"Pelikani.", img:"https://smtechnology133.github.io/images/pelican.jpg"},
    
    {name:"a Phonix.", ch:"Fonikisi.", img:"https://smtechnology133.github.io/images/phonix.jpg"},
    
    {name:"a Raven.", ch:"Khwangwala.", img:"https://smtechnology133.github.io/images/raven.jpg"},
    
    {name:"a Sea gull.", ch:"Sigala.", img:"https://smtechnology133.github.io/images/seagull.jpg"},
    
    {name:"a Qail.", ch:"Chinziri.", img:"https://smtechnology133.github.io/images/qail.jpg"},
    ],
    //Birds ends here
    
//_______________________________    
    
    //insects starts from here
    insects: [
        {name:"a Cocroach.", ch:"Nphenvu.", img:"https://smtechnology133.github.io/images/cockroach.jpeg"},
        
         {name:"a Cricket.", ch:"Nkhululu.", img:"https://smtechnology133.github.io/images/cricket.jpeg"},
         
          {name:"a House fly.", ch:"Ntchentche.", img:"https://smtechnology133.github.io/images/housefly.jpeg"},
          
            {name:"a Tsetse fly.", ch:"Pwayi.", img:"https://smtechnology133.github.io/images/tsetsefly.jpg"},
            
             {name:"a Centipede.", ch:"Nankalizi.", img:"https://smtechnology133.github.io/images/centipede.jpeg"},
              
              {name:"a Milipede.", ch:"Bongololo.", img:"https://smtechnology133.github.io/images/millipede.jpeg"},
                
             {name:"an Alphid.", ch:"Kachilombo.", img:"https://smtechnology133.github.io/images/alphid.jpeg"},
                
                {name:"an Ant.", ch:"Nyerere.", img:"https://smtechnology133.github.io/images/ant.jpeg"},
                
                 {name:"a Bee.", ch:"Njuchi.", img:"https://smtechnology133.github.io/images/bee.jpg"},
                 
                {name:"a Bettle.", ch:"Bito.", img:"https://smtechnology133.github.io/images/bettle.jpeg"},
                
             {name:"a Butterfly.", ch:"Gulugufe.", img:"https://smtechnology133.github.io/images/butterfly.jpeg"},
             
            {name:"a Dragon fly.", ch:"Chouluka cha diragoni.", img:"https://smtechnology133.github.io/images/dragofly.jpeg"},
            
           {name:"a Fire fly.", ch:"Chouluka cha moto.", img:"https://smtechnology133.github.io/images/firefly.jpeg"},
           
           {name:"a Lice.", ch:"Nsabwe.", img:"https://smtechnology133.github.io/images/lice.jpeg"},
           
           {name:"a Maize Weevil.", ch:"Nankafubwe.", img:"https://smtechnology133.github.io/images/maizeweevil.jpg"},
           
        {name:"a Mosquito.", ch:"Udzudzu.", img:"https://smtechnology133.github.io/images/mosquito.gif"},
        
         {name:"a Tick.", ch:"Nthata.", img:"https://smtechnology133.github.io/images/tick.jpg"},      
    ]
    //Insects ends here
};

//_______________________________

//Code to save app offline
const CACHE_NAME = "my-website-v1";

const FILES_TO_CACHE = [
  "/",
  "/animalNames.html",
  "/profiler.css",
  "/bootstrap.min.css",
  "/jquery.min.js",
  "/jquery-ui.min.js",
  "/bootstrap.min.js",
  "/profiler.js",
  "/animal.js",
];

// Install and cache website files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Serve cached files when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
//End code to save app offline