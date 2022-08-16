const baseDeDatos = [
    {
        "id": 1 ,
        "tipo": "consola" ,
        "marca": "Sony" ,
        "precio": 183500 ,
        "title": "Sony Entertenaiment PlayStation 4 PRO 1TB" ,
        "image" : "https://indiehoy.com/wp-content/uploads/2021/03/ps4.jpg"
    },
    {
        "id": 2 ,
        "tipo": "consola" ,
        "marca": "Microsoft" ,
        "precio": 173000 ,
        "title": "Microsoft Xbox ONE 1TB Edicion Limitada" ,
        "image" : "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_720x405/public/media/image/2013/05/225410-especificaciones-xbox-one-asi-es-nueva-consola.png?itok=esbym68v"
    },
    {
        "id": 3 ,
        "tipo": "celular" ,
        "marca": "Apple" ,
        "precio": 183499 ,
        "title": "Apple Iphone 13 ProMAX 256gb" ,
        "image" : "https://cdn.elnacional.com/wp-content/uploads/2021/09/iphone-13-design-schematic-3d-leak-1.jpg" 
    },
    {
        "id": 4 ,
        "tipo": "celular" ,
        "marca": "Asus" ,
        "precio": 154999 ,
        "title": "Notebook ASUS x515 I5 256SSD" ,
        "image" : "https://http2.mlstatic.com/D_NQ_NP_742268-MLA48061903696_102021-O.jpg"
    },
    {
        "id": 5 ,
        "tipo": "notebook" ,
        "marca": "Lenovo" ,
        "precio": 146999 ,
        "title": " Notebook Lenovo IdeaPad3 Ryzen 3" ,
        "image" : "https://www.notebookcheck.org/uploads/tx_nbc2/4zu3_Lenovo_Ideapad_5_14ARE05.jpg"
    },
    {
        "id": 6 ,
        "tipo": "televisor" ,
        "marca": "Samsung",
        "precio": 68900 ,
        "title": "Televisor SmartTV 50' Full HD 4K" ,
        "image" : "https://images.fravega.com/f1000/d7ca24bf5639a7db78c31aa9fa963be8.jpg"
    },
    {
        "id": 7 ,
        "tipo": "celular" ,
        "marca": "Samsung",
        "precio": 124124 ,
        "title": "Samsung Galaxy A21s 64GB 4RAM" ,
        "image" : "https://i.blogs.es/e53d84/samsung-galaxy-a21s-8/840_560.jpg"
    },
    {
        "id": 8 ,
        "tipo": "consola" ,
        "marca": "Nintendo" ,
        "precio": 124124 ,
        "title": "Nintendo Switch 1TB Deluxe Edition" ,
        "image" : "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
    },
    {
        "id": 9,
        "tipo": "celular" ,
        "marca": "Motorola" ,
        "precio": 80000 ,
        "title":"Motorola G9 Plus 64GB 4RAM" ,
        "image": "https://tiendamanath.com/250-large_default/motorola-moto-g9-plus-128gb.jpg"
    },
    {
        "id": 10 ,
        "tipo": "televisor" ,
        "marca": "LG",
        "precio": 54000 ,
        "title":"Televisor LG 32' Full HD 4K " ,
        "image": "https://www.lg.com/ar/images/televisores/md05781190/gallery/medium07_1.jpg"
    },
    {
        "id": 11 ,
        "tipo": "celular" ,
        "marca": "Samsung" ,
        "precio": 40000 ,
        "title":"Samsung Galaxy J7 32GB 2RAM" ,
        "image": "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2339.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"
    },
    {
        "id": 12 ,
        "tipo": "celular" ,
        "marca": "Samsung" ,
        "precio": 61999 ,
        "title":"Samsung galaxy A23 64GB 4RAM" ,
        "image": "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/EDIT_2_2_4.png"
    },
    {
        "id": 13 ,
        "tipo": "notebook" ,
        "marca": "Dell" ,
        "precio": 599999 ,
        "title":"Notebook Dell AlienWare i7" ,
        "image": "https://http2.mlstatic.com/D_NQ_NP_763503-MLA46168980360_052021-O.webp"
    },
    {
        "id": 14 ,
        "tipo": "notebook" ,
        "marca": "Lenovo" ,
        "precio": 65999 ,
        "title":"Notebook Lenovo Cloud i5" ,
        "image": "https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000031000/17611_3.webp"
    },
    {
        "id": 15 ,
        "tipo": "notebook" ,
        "marca": "Kanji" ,
        "precio": 38499 ,
        "title":"Televisor Kanji 40' Full HD 1080" ,
        "image": "https://http2.mlstatic.com/D_NQ_NP_706327-MLA47135376088_082021-O.webp"
    },
    {
        "id": 16 ,
        "tipo": "notebook" ,
        "marca": "Asus" ,
        "precio": 201000 ,
        "title":"Nootebok Asus Zenbook i7" ,
        "image": "http://d2r9epyceweg5n.cloudfront.net/stores/001/849/231/products/notebook-asus-zenbook-ux425e1-18d97e04bd6856e43b16306316859541-640-0.jpg"
    }
];