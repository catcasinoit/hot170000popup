/* Please, don't do shit-code  */
Element.prototype.closest || (Element.prototype.closest = function(t) { for (var e = this; e;) { if (e.matches(t)) return e;e = e.parentElement } return null });

Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(e) { "use strict"; if (null == e) throw new TypeError("Cannot convert first argument to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) { var o = arguments[n]; if (null != o) for (var a = Object.keys(Object(o)), c = 0, b = a.length; c < b; c++) { var i = a[c], l = Object.getOwnPropertyDescriptor(o, i); void 0 !== l && l.enumerable && (t[i] = o[i]) } } return t } });

window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);

function $$(e, o, t) { "function" != typeof o ? o = o || document : (t = o, o = document); var c = o.querySelectorAll(e); return c = Array.prototype.slice.call(o.querySelectorAll(e)), "function" == typeof t && c.forEach(function(e, o, c) { t(e, o, c) }), c }

function addCss(r, s) { var a = function(r) { Object.assign(r.style, s) }; if (Array.isArray(r))
        for (var n = r.length - 1; n >= 0; n--) a(r[n]);
    else a(r) }

function getElementIndex(e) { for (var n = 0; e = e.previousElementSibling;) n++; return n }

function h_el(r) { return !!(Array.isArray(r) && r.length > 0) }

function debugging() { [].forEach.call($$("*"), function(n) { n.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) }) }





document.addEventListener("DOMContentLoaded", function(event) {
    // - Code to execute when all DOM content is loaded. 
    // - including fonts, images, etc.

    let elements = document.querySelectorAll('.mousemove');
    let width = window.innerWidth;
    //parralax
    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers
            ||
            navigator.maxTouchPoints; // works on IE10/11 and Surface
    };
    
    
    
        if(!is_touch_device()) {
            document.addEventListener('mousemove', (e)=>{
                elements.forEach(item=>{
                    let speed = item.getAttribute('data');
                    let x = (window.innerWidth - e.pageX*speed)/250;
                    item.style.transform = `translate(${x}px )`;
                });
            });
        }
        ///
    
        
    
        let btn = $$('.main__btn')[0];
        let popup = $$('.popup')[0];
        let mobCat1 = $$('.cat1 img')[0];
        let mobCat2 = $$('.cat2 img')[0];
        let mobCat3 = $$('.cat3 img')[0];
        let close = $$('.popup__close ')[0];
        let close2 = $$('.popup .visible ')[0];
    
    
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            popup.classList.add('visible');
            // console.log('click')
            mobCat2.classList.add('cats-show');
            setTimeout(()=>{
                mobCat3.classList.add('cats-show');
                mobCat1.classList.add('cats-show');
            },1000);
        });
    
    
        
        function popupClose(){
            popup.classList.remove('visible')
        }
    
        close.addEventListener('click', popupClose);
        close2.addEventListener('click', popupClose);
    
    
    
    
        // document.addEventListener('click', (e)=>{
        //     console.log(e.target);
        // })


});








    


    
    