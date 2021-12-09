const a = document.forms['faram'];

const ul = document.querySelector('ul');

a.addEventListener('submit', function (g) {
    //to stop page from reloading as it is it's default action
    g.preventDefault();
    const value = a.querySelector('input[type= "text"]').value;
    //    console.log(value);
    const li = document.createElement('li');
    const span = document.createElement('span');

    //adding the content

    span.textContent = value;

    // adding classes
    // for removing write .remove
    span.classList.add('list');

    // appending the content 
    li.appendChild(span);
    ul.appendChild(li);


});

// const lc = document.querySelector('li:last-child');
// console.log(lc);


//for hiding the content using check box

const hidebox = document.querySelector('#hide');

hidebox.addEventListener('change',function(e)
{
    if(hidebox.checked)
    {
        ul.style.display = 'none';
    }
    else
    {
        ul.style.display = 'initial';
    }
})

// js for adding search suggestions

const searchBar = document.forms['formo'].querySelector('input');

searchBar.addEventListener('keyup', function(e)
{
    const term = e.target.value.toLowerCase();
    const books = ul.getElementsByTagName('li');

    Array.from(books).forEach(function (book) {
        
        const title = book.textContent;

        if(title.toLowerCase().indexOf(term)!=-1)
        {
            book.style.display = 'block';
        }
        else
        {
            book.style.display = 'none';
        }
    })
})

