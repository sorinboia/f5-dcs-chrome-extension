let state = {};


chrome.storage.local.get(['state'], function(result) {    
    state = result.state;
    console.log('Background got from storage',state);
});


chrome.runtime.onMessage.addListener( (msg, sender, sendReponse) => {        
    const { event, data } = msg;
    console.log('Background',event, data,state);
    let response = null;

    switch(event) {
        case 'setData': 
            chrome.storage.local.set({state:data});
            state = data;
            
            chrome.tabs.query({}, (tabs) => {                
                for (let i=0; i<tabs.length; ++i) {
                    chrome.tabs.sendMessage(tabs[i].id, { event:'newBackgroudData' },(data) => {});
                }
            });
                        
            break;

        case 'getToHighlight':
            const activeCourse = state.courses[state.activeCourse];
            response = [];
            activeCourse.tasks.forEach((task) => {
                if(task.active) {                    
                    task.steps.forEach((step) => {
                        console.log(step);
                        if (step.selector.url == data || step.selector.url == '')
                            response.push(step.selector);
                    });
                }
            });
            console.log(response);
            break;                    
    }

    sendReponse(response);    
});

















