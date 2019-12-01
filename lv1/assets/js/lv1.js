const input =  document.querySelector('.search')
const btn = document.querySelector('.sub')
const songlist =document.querySelector('.songlist')
const request = new XMLHttpRequest()
console.log(request)
const API ='https://music.niubishanshan.top/api/v2/music/search/唐人/1/10'
request.open('GET', API, true)
  btn.addEventListener('click',()=>{
    request.onreadystatechange = function () {
  if (request.readyState === 4) {

    if (request.status === 200) {

      const json = JSON.parse(request.responseText)

      console.log(json)

      console.log(request.responseText)
      
      const str = JSON.stringify(json)

      console.log(str)

      const {data} = json

      const {songList} = data

      const idList = songList.map(e=>e.songName)

      const html = idList.map(str => `<li>${str}</li>`).join("")

      console.log(html)

      console.log(idList)

      songlist.innerHTML = html

      console.log('请求成功')
    } else {

      console.log('请求错误')

    }

  }

}

//const script = document.createElement('script')

//script.src = 'https://music.niubishanshan.top/api/v2/music/search/'


//const head = document.querySelector('head')

//head.appendChild(script)

request.send()
})
