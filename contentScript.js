let toHighlight = null;

const toRunfunc = () => {    
    for (let i in toHighlight) {            
        const { text, up, type } = toHighlight[i];        
        $(`${type}:not(:has(*))`).filter(function() {
                
                //if ($(this).text().trim() === text) console.log (text,$(this));
                
                return $(this).text().trim() === text;
            })
            .parents().eq(up)
            .css("border-style","solid")
            .css("border-color","coral");            
    }
}

$( document ).ready(toRunfunc);


let lastUrl = null;
new MutationObserver(() => {
    if (lastUrl !== location.href) {        
        console.log('URL changed',lastUrl,location.href);
        lastUrl = location.href;
        getNewConfig();
    }
    toRunfunc();
}).observe(document, {subtree: true, childList: true});



const getNewConfig = () => {
    chrome.runtime.sendMessage(null,{ event:'getToHighlight', data:location.href },(data) => {
        console.log('Content script got from background',data);
        toHighlight = data;
    });
};

chrome.runtime.onMessage.addListener( (msg, sender, sendReponse) => {        
    const { event, data } = msg;
    console.log(msg);
    let response = null;

    switch(event) {
        case 'newBackgroudData': 
            document.location.reload(true)
            break;               
    }

    sendReponse(response);    
});



