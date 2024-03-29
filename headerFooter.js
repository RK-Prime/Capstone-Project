
document.addEventListener("DOMContentLoaded", function() {

    // header function starts
function headerFunc(){
    var header = document.createElement('header');
    var nav = document.createElement('nav');

    header.setAttribute('id', 'header');
    nav.setAttribute('id', 'header-nav');

    header.style.backgroundColor = 'black';
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.zIndex = '1';
    header.style.margin = '0px';
    header.style.height = 'auto';

    var heading = document.createElement('h1');
    heading.setAttribute('id', 'heading');

    heading.textContent = 'Ecommerce';
    heading.style.background = "linear-gradient(to right, rgb(181, 184, 1), white)";
    heading.style.webkitBackgroundClip = "text";
    heading.style.webkitTextFillColor = "transparent";
    heading.style.position = 'relative';
    heading.style.float = 'left';
    heading.style.fontFamily = "Brush Script MT";
    heading.style.fontSize = '4vw';
    heading.style.fontWeight = 'bold';
    heading.style.letterSpacing = '0.5px';
    heading.style.margin = '0';
    heading.style.display= 'flex';
    heading.style.alignItems ='center';
    // heading.style.border='solid red';




    var searchform = document.createElement('form');
    searchform.setAttribute('id', 'searchform');
    var searchinput = document.createElement('input');
    searchinput.setAttribute('id', 'searchinput');
    var searchbtn = document.createElement('button');
    searchbtn.setAttribute('id', 'searchbtn');


    searchinput.type = 'search'
    searchinput.placeholder = 'Product name, Category name, etc.'
    searchinput.style.fontSize = '1vw';
    searchinput.style.padding = '0.8vw';
    searchinput.style.alignContent ='center';
    searchinput.style.border = 'none';
    searchinput.style.borderRadius = '0px 0px 0px 10px';
    searchinput.style.height = '2.2vw';
    searchinput.style.width = '24vw';
    searchinput.style.position = 'relative';

    searchbtn.setAttribute('id', 'searchbtn');
    searchbtn.type = 'submit';
    searchbtn.textContent = 'Search';
    searchbtn.style.background = 'rgb(194, 197, 2)';
    searchbtn.style.color = 'black';
    searchbtn.style.padding = '1vw';
    searchbtn.style.border = 'none';
    searchbtn.style.borderRadius = '0px 10px 0px 0px';
    searchbtn.style.fontSize = '1.2vw';
    searchbtn.style.fontFamily = "cursive";
    searchbtn.style.height = '2.2vw';
    searchbtn.style.cursor = 'pointer'
    searchbtn.style.display = 'flex';
    searchbtn.style.alignItems = 'center';
    searchbtn.style.fontWeight = 'bold';
    searchbtn.style.letterSpacing = '1px';

    searchbtn.onclick = ()=>{
        if(searchinput.value){
            alert(`Searh Executed for ${searchinput.value}`)}
        else{
            alert('Invalid Search option')
        }
    };

    searchbtn.onmouseover = ()=>{
        searchbtn.style.backgroundColor = 'rgb(182, 185, 2)';
        searchbtn.style.color = 'white';
        searchbtn.style.transition = 'ease 0.5s';
    };
    
    searchbtn.onmouseout = ()=>{
        searchbtn.style.backgroundColor = 'rgb(194,197,2)';
        searchbtn.style.color = 'black';
    };
    
    searchform.style.display = 'flex';
    searchform.style.position = 'relative';
    searchform.style.alignItems = 'center';
    // searchform.style.border = 'solid red';

    //searchform.style.margin = '0 auto';



    searchform.appendChild(searchinput);
    searchform.appendChild(searchbtn);

    var loginbtn = document.createElement('a');

    loginbtn.setAttribute('href','LoginPage.html');
    loginbtn.setAttribute('id', 'loginbtn');
    loginbtn.textContent = 'Login';
    
    loginbtn.style.color = 'black';
    loginbtn.style.backgroundColor = 'rgb(194, 197, 2)';
    loginbtn.style.height = '2vw';
    loginbtn.style.width = 'auto';
    loginbtn.style.fontSize = '1.2vw';
    loginbtn.style.margin =  'auto 5px';
    loginbtn.style.padding = '1.2vw';
    loginbtn.style.borderRadius = '0.6vw';
    loginbtn.style.fontWeight = 'bold';
    loginbtn.style.fontFamily = 'cursive';
    loginbtn.style.display ='flex';
    loginbtn.style.alignItems='center';
    loginbtn.style.cursor = 'pointer';
    loginbtn.style.letterSpacing = '1px';
    loginbtn.style.textDecoration = 'none';


    loginbtn.onmouseover = ()=>{
        loginbtn.style.backgroundColor = 'rgb(182, 185, 2)';
        loginbtn.style.color = 'white';
        loginbtn.style.textDecoration = 'none';
        loginbtn.style.transition = 'ease 0.5s';
    };
    loginbtn.onmouseout = ()=>{  
        loginbtn.style.backgroundColor = 'rgb(194, 197, 2)';
        loginbtn.style.color = 'black';
    };

    var carticonlink = document.createElement('a');
    carticonlink.setAttribute('id', 'carticonlink')
    carticonlink.setAttribute('href','CartPage.html');

    carticonlink.style.textDecoration = 'none';
    carticonlink.style.color = 'rgb(194,197,2)';
    carticonlink.style.margin = 'auto 10px';
    carticonlink.style.fontSize = '2.2vw';

    var carticon = document.createElement('i');

    carticon.className = 'fa-solid fa-cart-shopping';
    carticon.setAttribute('id', 'carticon');

    carticon.onmouseover = () => {
        carticon.style.transition = 'ease 0.5s';
        carticon.style['-webkit-text-stroke'] = '1.5px #ffffff';
    };

    carticon.onmouseout = () => {
        carticon.style.transition = 'ease 0.5s';
        carticon.style['-webkit-text-stroke'] = '0px';
    }

    var logindiv = document.createElement('div');
    logindiv.setAttribute('id', 'logindiv');

    logindiv.style.display = 'flex';
    logindiv.style.flexDirection = 'row';
    logindiv.style.alignSelf = 'center';
    logindiv.style.float = 'right';
    // logindiv.style.border = 'solid red';
    logindiv.style.margin = '0px';


    nav.style.display = 'flex';
    nav.style.flexDirection = 'row';
    nav.style.width = '100%';
    nav.style.padding = '3px';
    nav.style.justifyContent = 'space-around';
    // nav.style.border = 'solid red';

    // heading in nav
    nav.appendChild(heading);
    // searchform in nav
    nav.appendChild(searchform);
    // loginbtn in logindiv
    logindiv.appendChild(loginbtn);
    // carticon in carticonlink
    carticonlink.appendChild(carticon);
    // carticon in logindiv
    logindiv.appendChild(carticonlink);
    //logindiv in nav
    nav.appendChild(logindiv);
    // nav in header
    header.appendChild(nav);

    document.body.insertBefore(header, document.body.firstChild);

};

// header function ends



function activeFunc() {
    const location = document.location.href;
    const ids = [
        { id1: "#allproductid"},
        { id1: "#homeid"},
        { id1: "#women-item1-id", id2: "#womenid" },
        { id1: "#men-item1-id", id2: "#menid" },
        { id1: "#kidsid"}
    ];


    const color1 = '#fff';
    const color2 = 'rgb(194,197,3)';
    const border = '4px';

    for (const { id1, id2 } of ids) {
        const el = document.querySelector(id1);
        if (location === el.href) {
            el.style.color = color1;
            el.style.backgroundColor = color2;
            el.style.borderRadius = border;
            if (id2) {
                document.querySelector(id2).style.color = color1;
                document.querySelector(id2).style.backgroundColor = color2;
                document.querySelector(id2).style.borderRadius = border;
            }
            break;
        }
    }
}


// footer function starts

function footerFunc(){

    // footer starts
    var footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    footer.style.backgroundColor = 'black';
    footer.style.position = 'relative';
    footer.style.margin = '0px';
    footer.style.width = 'auto';
    footer.style.height = 'auto';
    footer.style.bottom = '0';
    footer.style.top = '100';
    footer.style.display = 'flex';
    footer.style.alignItems = 'center';

    // list div starts

    var listdiv = document.createElement('div');
    listdiv.setAttribute('id', 'listdiv');

    // womelist part starts

    var womenlist = document.createElement('ul');
    womenlist.className = 'footer-lists';
    var women_item_list = ['Women', 'Dresses', 'Pants', 'Skirts'];

    women_item_list.forEach(function(listitem){
        var list_item = document.createElement('li');
        var item = document.createElement('a');

        womenlist.style.listStyle = 'none';
        item.style.textDecoration = 'none';
        item.href= '#';
        item.textContent = listitem;
        item.style.fontFamily = 'Arial';
        item.style.color = 'white';
        item.style.fontFamily = 'cursive';

        if(item.textContent == 'Women'){
            item.setAttribute('href', 'womenproductPage.html');
            item.className = 'item';
            item.style.fontSize = '24px';
            item.style.marginBottom = '7px';
        }
        else{
            item.className = 'list-item';
            item.style.fontSize = '15px';
        }


        list_item.appendChild(item);
        womenlist.appendChild(list_item);
    });

    womenlist.style.display = 'flex';
    womenlist.style.flexDirection = 'column';
    womenlist.style.alignItems = 'center';

    // women list ends

    // men list starts

    var menlist = document.createElement('ul');
    menlist.className = 'footer-lists';
    var men_list_item = ['Men', 'Hoodies', 'Pants','Shirts'];
    
    men_list_item.forEach(function(listitem){
        var list_item = document.createElement('li');
        var item = document.createElement('a');

        menlist.style.listStyle = 'none';
        item.style.textDecoration = 'none';
        item.href= '#';
        item.textContent = listitem;
        item.style.fontFamily = 'Arial';
        item.style.color = 'white';
        item.style.fontFamily = 'cursive';

        if(item.textContent == 'Men'){
            item.setAttribute('href', 'menproductPage.html');
            item.className = 'item'
            item.style.fontSize = '24px';
            item.style.marginBottom = '7px';
        }
        else{
            item.className = 'list-item';
            item.style.fontSize = '15px';
        }


        list_item.appendChild(item);
        menlist.appendChild(list_item);
    });

    menlist.style.display = 'flex';
    menlist.style.flexDirection = 'column';
    menlist.style.alignItems = 'center';

    // men list ends


    // kids list starts

    var kidslist = document.createElement('ul');
    kidslist.className = 'footer-lists';
    var kids_list_item = ['Kids', 'Dresses', 'Shirts', 'Shorts'];
    
    kids_list_item.forEach(function(listitem){
        var list_item = document.createElement('li');
        var item = document.createElement('a');

        kidslist.style.listStyle = 'none';
        item.style.textDecoration = 'none';
        item.href= '#';
        item.textContent = listitem;
        item.style.fontFamily = 'Arial';
        item.style.color = 'white';
        item.style.fontFamily = 'cursive';

        if(item.textContent == 'Kids'){
            item.setAttribute('href', 'kidsproductPage.html');
            item.className = 'item';
            item.style.fontSize = '24px';
            item.style.marginBottom = '7px';
            // item.style.fontWeight='bold';
        }
        else{
            item.className = 'list-item';
            item.style.fontSize = '15px';
        }


        list_item.appendChild(item);
        kidslist.appendChild(list_item);
    });

    kidslist.style.display = 'flex';
    kidslist.style.flexDirection = 'column';
    kidslist.style.alignItems = 'center';
    kidslist.style.color = 'white';
    
    // kids list ends
    

    // link list starts
    var linkslist = document.createElement('ul');
    linkslist.className = 'footer-lists';

    var links_list_item = ['Links', 'Home', 'Login', 'Contact'];
    
    links_list_item.forEach(function(listitem){
        var list_item = document.createElement('li');
        var item = document.createElement('a');

        linkslist.style.listStyle = 'none';
        item.style.textDecoration = 'none';
        item.textContent = listitem;
        item.style.fontFamily = 'Arial';
        item.style.color = 'white';
        item.style.fontFamily = 'cursive';

        if(item.textContent == 'Links'){
            item.className = 'item';
            item.style.fontSize = '24px';
            item.style.marginBottom = '4px';        
        }
        else{
            item.className = 'list-item';
            item.style.fontSize = '15px';
            if(item.textContent == 'Home'){
                item.setAttribute('href', 'HomePage.html');
            }
            else if(item.textContent == 'Login'){
                item.setAttribute('href', 'LoginPage.html');
            }
            else{
                item.setAttribute('href', 'ContactUs.html');
            }
        }


        list_item.appendChild(item);
        linkslist.appendChild(list_item);
    });

    linkslist.style.display = 'flex';
    linkslist.style.flexDirection = 'column';
    linkslist.style.alignItems = 'center';
    linkslist.style.color = 'white';
    // links list ends

    // hr div starts
    var hrdiv = document.createElement('div');
    hrdiv.setAttribute('id', 'hrdiv');
    var hrelement = document.createElement('hr');
    hrelement.setAttribute('id', 'hrelement');
    hrelement.style.borderTop = '2px solid rgba( 255, 255, 255, 0.2)';
    hrelement.style.width = '100%';
    hrelement.style.display = 'flex';
    hrelement.style.flexDirection = 'row';
    hrelement.style.position = 'relative';
    hrelement.style.justifyContent = 'center';
    // hr div ends

    listdiv.style.display='flex';
    listdiv.style.flexDirection = 'row';
    listdiv.style.justifyContent = 'space-around';
    listdiv.style.width = '100%';
    listdiv.style.marginTop = '0px';
    // list div ends


    var footerdiv = document.createElement('div');
    footerdiv.setAttribute('id', 'footerdiv');
    var copyright = document.createElement('p');
    copyright.setAttribute('id', 'copyright')
    copyright.innerHTML = 'Copyright &#169; Ecommerce 2023-24';
    copyright.style.color = 'white';
    // copyright.style.fontWeight = 'bold';
    copyright.style.margin = '2cm 0px 20px 0px';
    copyright.style.fontSize = '25px';
    copyright.style.textAlign = 'center';
    copyright.style.fontFamily = 'Arial';
    copyright.style.letterSpacing = '1px';
    copyright.style.opacity= '0.8';


    footerdiv.style.display = 'flex';
    footerdiv.style.flexDirection = 'column';
    footerdiv.style.width = '100%';
    footerdiv.style.height = '100%';
    footerdiv.style.margin = '40px 0px 0px 0px';



    // womenlist in listdiv
    listdiv.appendChild(womenlist);
    // menlist in listdiv
    listdiv.appendChild(menlist);
    // kidslist in listdiv
    listdiv.appendChild(kidslist);
    // linkslist in listdiv
    listdiv.appendChild(linkslist);
    // hrelement in hrdiv
    hrdiv.appendChild(hrelement);
    // listdiv in footerdiv
    footerdiv.appendChild(listdiv);
    // hrdiv in footerdiv
    footerdiv.appendChild(hrdiv);
    // copyright in footerdiv
    footerdiv.appendChild(copyright);
    // footerdiv in footer
    footer.appendChild(footerdiv);

    document.body.appendChild(footer);

    // footer ends
};

// footer functions starts

// Calling functions

headerFunc();

activeFunc();

footerFunc();


});

