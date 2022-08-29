'use strict';

const e = React.createElement;

const {useState, useEffect} = React;


function LikeButton()   {

    let [like, setLike] = useState(false);


    const clickHandler = () => setLike(state = !state);

    useEffect()

    return (
        <div>
            <p>{like && "you liked it"}{!like && "you have not like it yet"}</p>
            <button onClick={clickHandler}>Like</button>
        </div>
    )
}

async function awaitGlobal({condition}) {
    await new Promise(resolve => {
        let interval = setInterval(() => {
              if(condition())   {
                  clearInterval(interval);
                  resolve();
              }
          }, 10);
    });
}
  
(async function(){

    await awaitGlobal({condition : () => window.hasOwnProperty("___cc__CcScraperGlobalObject")});
    
    ReactDOM.render(<LikeButton />, document.getElementById('cc-scraper-ui-container'));

}());