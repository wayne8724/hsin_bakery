# 烘焙店電商網站

**首頁今日精選API串接完成、Footer Email訂閱表單功能完成**
**最下方心得持續更新中**

預期進度  
html、css切版 → **JS功能、串接API** → 改善或新增功能

## Demo
<https://wayne8724.github.io/hsin_bakery/>

Demo用的帳號密碼  

帳號: bakery123@gmail.com  

密碼: bakery321  

Demo用優惠碼

bakery123

## 簡介
家裡是經營麵包店的，所以選擇製作以烘焙為主題的電商網站，並作為Vue3前端技術的練習。預計網站功能如下:

  + 首頁
    + 介紹
    + 本日精選 
    + 優惠碼領取
  + 商品
    + 商品篩選
  + 收藏 
  + 登入
  + 購物車

## 使用技術

  + Vue3 (Options API)
  + VueRouter (hash mode)
  + JavaScript (ES6)
  + RWD (Scss)
  + Bootstrap5
  + ESlint (airbnb)

## 使用 Plugin

  + axios
  + Vee-validate
  + mitt
  + vue3-loading-overlay

## 頁面介紹
(待補)

## 開發時程
(待補)

## 聲明

本作品僅作練習使用，不具任何商業用途。  
本作品之文案皆為虛構，僅供會心一笑，切勿當真。

 ## 作品心得
切版與RWD：

一開始製作RWD版面的時候沒發現Bootstrap5是mobile優先，他的class詞綴（如justify-content-lg-center）的意思是裝置尺寸≥992px以上justify-content-center，放在css就是min-width:992px。而我當時是用max-width的觀念下去製作RWD，又我在檢查（按F12）時，我是直接按裝置尺寸檢查。也就是說剛好在992px這個尺寸下，所有畫面都是沒問題的。我就一路這樣切下去直到我手癢去拉網頁尺寸才知道出大事、大跑版了。

由於已經切很多版了，我就先以max-width為主，並將有lg、md等詞綴改掉，格線系統也全部移除了。經過這次教訓，會特別注意css框架在尺寸上的設計。且在使用BS5製作網站時，用min-width去做RWD會比較方便、正確。而在修改的過程也發現太巢狀的scss很難看（會找很久），RWD時權重也很難覆蓋，以後分開寫或不要超過三層，應該會比較好維護。

JS：

製作優惠券Modal功能時，發現以data-bs-target="#exampleModalToggle" data-bs-toggle="modal"實現這個Modal跳到下個Modal時，會出現無法讀取hide值的error，Google之後發現應該是bs5版本的關係，有待實際驗證。

製作複製優惠碼到剪貼簿的功能時，發現execCommand('copy')過氣了，現在改用navigator.clipboard.writeText(foo)來實現複製到剪貼簿功能。

使用vee-validate套件要注意當Form表單裡面有Field時，按enter會直接觸發表單提交，觸發後瀏覽器會嘗試重新加載，所以要注意不要在裡面寫keydown、keypress等事件。（製作Footer Email訂閱功能時的發現）。