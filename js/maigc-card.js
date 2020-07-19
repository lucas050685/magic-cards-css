/**
 * Author: Lucas Machado Rodrigues
 * E-mail: lucas050685@gmail.com
 * from Brazil
 */

/**
 * Flips a magic card div element
 * ex. <div ... onClikc="flipMe(this);">
 * @param {DOM Element} o 
 * @param {Function} callback 
 */
function flipMe(o, callback) {
    let arr = o.className.split(" ");
    let newFlipClass = 'flip';
    let removeFlipClass = 'flip-over';
    let animated = false;

    if(arr.indexOf(newFlipClass) != -1){
        newFlipClass = 'flip-over';
        removeFlipClass = 'flip';
    }

    arr = arr.filter((el, index)=>{
        if(el == 'animated'){
            animated = true;
            return false;
        }

        if(newFlipClass == 'flip' && el == 'fliped') return false;

        if(el == removeFlipClass) return false;
        return true;
    });

    arr.push(newFlipClass);

    var newCard = o.cloneNode(true);
    newCard.className = arr.join(' ');
    o.parentNode.replaceChild(newCard, o);
    if(animated){
        setTimeout(()=>{
            newCard.className += ' animated ';
        }, 1000);
    }

    if(typeof(callback) == 'function'){
        callback(o);
    }
}