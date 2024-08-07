function updatePointContent(element, title, content, link){
    $(element).text(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}
var ti = "五大区人数登记与统计"
$('title').text(ti)
$('h1').text(ti)
//登记表
$('.div1 > .sub').text("登记表")
ti = ""
var content = "<a>第一排</a>"
var link = "https://forms.gle/WzbacvGJ3Ef7G9JB9"
var elem = '.div1 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
content = "<a>第二排</a>"
link = "https://forms.gle/zkHFzhXgiaNCDx9k9"
elem = '.div1 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
content = "<a>第三排</a>"
link = "https://forms.gle/i2PTaoYj7vT3RhFU7"
elem = '.div1 > h3 > ul > .p3'
updatePointContent(elem, ti, content, link)
content = "<a>第四排</a>"
link = "https://forms.gle/mruMH6JpughF1rrU6"
elem = '.div1 > h3 > ul > .p4'
updatePointContent(elem, ti, content, link)
content = "<a>第五排</a>"
link = "https://forms.gle/gczdyypkbCNATAat9"
elem = '.div1 > h3 > ul > .p5'
updatePointContent(elem, ti, content, link)
content = "<a>检视结果</a>"
link = "http://chenin0423.synology.me:5000/"
elem = '.div2 > .sub'
updatePointContent(elem, ti, content, link)
content = "<a>大區名單</a>"
link = "https://docs.google.com/spreadsheets/d/1_sALkdIkIDViiGgZPVWw7JoSZjNPmrnoF9bxjqPNfu8/edit?usp=sharing"
elem = '.div3 > .sub'
updatePointContent(elem, ti, content, link)
