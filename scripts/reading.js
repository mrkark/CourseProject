document.addEventListener('DOMContentLoaded', function () {
    const getData = () => {
        const footer = document.querySelector('footer div')
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', 'scripts/reading.xml', true)
        xhttp.send()
        xhttp.onload = function () {
            const data = this.responseXML
            const footerXML = data.querySelector('.footer-div-xml')
            footer.appendChild(footerXML)
        }
    }

    getData()
})