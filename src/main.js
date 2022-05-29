
window.addEventListener('load', () => {
    const tabs = document.getElementById('tabs')

    if (tabs) {
        tabs.firstElementChild.classList.add('active')

        for (const tab of tabs.children) {
            width_height_tab(tab)
            tab.addEventListener('click', (e) => {
                for (const tab of tabs.children) {
                    tab.classList.remove('active')
                }
                tab.classList.add('active')
                width_height_tab(tab, tab.offsetLeft,tab.offsetTop)
            })
        }
        function width_height_tab(tab, x=0, y= 0) {
            if (tab.classList.contains('active')) {
                tabs.setAttribute('style', `--w:${tab.clientWidth}px;--h:${tab.clientHeight}px; --l: ${x}px; --t: ${y}px`)
            }
        }
    }

})
