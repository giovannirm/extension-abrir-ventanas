arr_li = document.getElementsByClassName("o_wslides_slide_list_category o_wslides_js_list_item mb-2")
arr_urls = []

for(let i=0; i<arr_li.length; i++){
    arr_div = arr_li[i].getElementsByClassName("o_wslides_slides_list_slide o_wslides_js_list_item bg-white-50 border-top-0 d-flex align-items-center pl-2 py-1 pr-2")
    for(let j=0; j<arr_div.length; j++){
        val_a = arr_div[j].getElementsByTagName("a")
        arr_urls.push(val_a[0].href)
    }
}

console.log(arr_urls)

for(let i=0; i<arr_urls.length; i++){
    window.open(arr_urls[i], "_blank");
}