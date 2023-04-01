const searchBook = () =>
{
    const searchFiled = document.getElementById('search_filed');
    const searchValue = searchFiled.value;
    console.log(searchValue);

    fetch(`https://openlibrary.org/search.json?q=${searchValue}`)
    .then(res => res.json())
    .then(data => displaySearchResult(data));

}
const displaySearchResult = (books) =>
{
    console.log(books.docs);
}
