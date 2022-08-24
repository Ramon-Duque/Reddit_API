fetch("https://www.reddit.com/r/aww/.json")
.then((response) => response.json())
.then(data => {

    const redditData = data.data.children;
    console.log(redditData);
    for (let i = 0; i<= 9; i++){
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
        const list = document.createElement('ul');
        container.appendChild(list);
        let listItems= document.createElement('li');
          listItems.innerText = redditData[i].data.title;
          list.appendChild(listItems);
          listItems.classList.add('listItems');
          


          let imgList = document.createElement('img');
          imgList.setAttribute('src', redditData[i].data.thumbnail);
          imgList.classList.add('img');
          list.appendChild(imgList);

          let links = document.createElement('a');
          links.setAttribute('href', redditData[i].data.permalink);
          links.classList.add('links');
          list.appendChild(links);


    }

   
    
});

