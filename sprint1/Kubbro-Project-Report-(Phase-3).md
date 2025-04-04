**design and architecture**
**ภายในโปรเจกต์ประกอบด้วย** <br>
**1.**       **folder views** <br>
![image.png](/.attachments/image-3db1a392-284e-4146-b3f7-4227c99e3a02.png)
**1.1.**     **book_list.ejs :** หน้าเว็บสำหรับแสดงหน้าหนังสือที่ผู้ใช้เพิ่มเป็นรายการโปรด <br><br>
**1.2.**     **communityReviewsPage.ejs :** หน้าเว็บสำหรับแสดงคอมเมนต์รีวิวหนังสือ โดยแสดงเป็นหลาย ๆ คอมเม้นของผู้ใช้ <br>
**homepage.ejs :** เป็นหน้าเว็บเกี่ยวกับการอ่านหนังสือออนไลน์ และมีฟีเจอร์ต่าง ๆ ที่ช่วยให้ผู้ใช้ติดตามและจัดการการอ่านของตัวเองได้ง่ายขึ้น <br>
**1.3.**     **ratingPage.ejs :** หน้าเว็บสำหรับการ rate หนังสือโดยสามารถกรอกชื่อผู้แต่ง ชื่อหนังสือ เพิ่มรูปปกหนังสือ ให้คะแนนและเขียนรีวิวได้ <br>
**1.4.**     **reviewPage.ejs :** หน้าเว็บสำหรับแสดงข้อมูลหนังสือและรายละเอียดข้อมูลรีวิว คะแนนรีวิวต่าง ๆ <br>
**1.5.**  **save_reading_session.ejs :** หน้าสำหรับฟีเจอร์ที่ให้ผู้ใช้บันทึกข้อมูลเกี่ยวกับการอ่านหนังสือ **แบบรายครั้ง** คล้ายกับการบันทึกไดอารี่การอ่านแต่ละครั้ง  <br>
**1.6.**     **signin.ejs :** หน้าเว็บสำหรับลงชื่อเข้าในกรณีที่ผู้ใช้มีบัญชีแล้ว <br>
**1.7.**     **signup.ejs :** หน้าเว็บสำหรับลงชื่อเข้าในกรณีที่ผู้ใช้ยังไม่มีบัญชี <br>
**1.8.**     **streak_page.ejs :** หน้าเว็บปลูกต้นไม้เก็บสะสมวันตามการเข้าใช้ของผู้ใช้งาน <br>
**1.9.**  **trackingPage.ejs :** หน้าสำหรับฟีเจอร์ที่ช่วยให้ผู้ใช้ ดูภาพรวม ของหนังสือที่กำลังอ่าน แสดง หนังสือที่อ่านอยู่ หนังสือที่อ่านจบ หนังสือที่อยากอ่าน <br>
**1.10.**     **user_profile.ejs :** หน้าเว็บสำหรับการแก้ไขข้อมูลส่วนตัวของผู้ใช้งาน <br>

**2.**         **Folder public** <br>
**2.1.**     **Img** ใช้เก็บรูปต่าง ๆ ที่ต้องใช้ในเว็บ<br>
![image.png](/.attachments/image-de22415c-e1cd-4190-b776-bbb789dfb971.png)<br>
![image.png](/.attachments/image-d627b7ac-215c-4615-8300-844bf246075e.png)<br>
**3.**         **folder test** <br>
![image.png](/.attachments/image-d40bad06-d443-40e2-a9b0-a355d1eadb70.png) <br>
**3.1**    **bookModel.test.js** **:** ใช้ในการทดสอบ class Book ทดสอบฟังก์ชันการทำงานหลักๆ ที่เกี่ยวข้องกับการจัดการหนังสือและรีวิว <br>
**3.2**    **bookReviewManager.test.js** **:** ใช้ในการทดสอบ class Review , BookReviewManager ครอบคลุมการทดสอบฟังก์ชันหลักที่เกี่ยวข้องกับการจัดการหนังสือและรีวิว รวมถึงการบันทึกและโหลดข้อมูลจากไฟล์ JSON <br>

**4.**         **folder controllers** <br>
![image.png](/.attachments/image-b26245e8-9690-46f3-aecc-3ce187da49b5.png)<br>
**bookController.js :** ควบคุมการจัดการข้อมูลหนังสือ เช่น การเพิ่ม แก้ไข ลบ และค้นหาหนังสือ ทำหน้าที่เชื่อมต่อระหว่างผู้ใช้กับฐานข้อมูลหนังสือผ่าน API ช่วยให้ระบบสามารถจัดการหนังสือได้อย่างมีประสิทธิภาพ<br>
**bookController.js :** เป็น Controller สำหรับ API ที่ใช้จัดการข้อมูลหนังสือในระบบ โดยทำงานร่วมกับไฟล์ books.json เพื่อเก็บข้อมูลหนังสือค้นหาหนังสือ<br>
**4.1**    **ratingController.js :** เอาไว้จัดการกับการให้คะแนนหนังสือ<br>
**4.2**    **streakController.js :** จัดการเกี่ยวกับสถิติต่อเนื่อง เช่นการอ่านหนังสือต่อเนื่องหลายวัน<br>
**4.3**    **trackingController.js :** จัดการเกี่ยวกับการติดตามการอ่านหรือความคืบหน้า<br>
**userController.js :** จัดการข้อมูลผู้ใช้ เช่น การสมัครสมาชิก ล็อกอิน อัปเดตโปรไฟล์ควบคุมการเข้าถึงและความปลอดภัยของบัญชีผู้ใช้งาน ดูแลระบบบัญชีให้มีความปลอดภัยและเป็นส่วนตัว<br>

**5.**         **file อื่นที่เกี่ยวข้อง** <br>
![image.png](/.attachments/image-fffb99c6-fd52-4e33-a49b-9f8ed173555b.png)<br>
**5.1**    **index.js** : เป็น Express.js Backend Server สำหรับจัดการหนังสือและรีวิว โดยใช้EJS เป็น template engine และรองรับ session-based authentication <br>
**5.2**    **package-lock.json , package.json :** ใช้กำหนดข้อมูลโปรเจกต์และแพ็กเกจที่ต้องใช้ <br>
**5.3**    **util.js :** เป็น คลาส Encryption ที่ใช้ crypto ใน Node.js เพื่อ เข้ารหัส (Hashing) ข้อความ ด้วย pbkdf2Sync และส่งออกผลลัพธ์เป็นค่า Hash <br>

**6.**         **Screen shot ตัวอย่างโค้ดในโปรเจกต์** <br>
![image.png](/.attachments/image-d47fb8f2-e75f-4804-b08f-842821341ff2.png)<br>
![image.png](/.attachments/image-8f84db2b-f09d-4a7f-ab3d-79dade065c0a.png)<br>
หน้าเว็บไซต์ 

*   signin.html 
    

![==image_0==.png](/.attachments/==image_0==-9f7090f6-3e79-4537-bcb5-ee604cb0062b.png)  

*   signup.html 
    

![==image_1==.png](/.attachments/==image_1==-f7b7afa0-4893-4d65-b39a-71d38fe4416f.png)  

*   homepage.html 
    

![==image_2==.png](/.attachments/==image_2==-2da01fc7-3922-41d2-90cf-3fd835d046ca.png)  

*   streak_page.html 
    

![==image_3==.png](/.attachments/==image_3==-23e19451-9115-4203-b675-c3fe57871bd5.png)  

![==image_4==.png](/.attachments/==image_4==-a4f8d5f4-bc54-4b53-8530-0b0c2d4a33fa.png)  

*   book_list.html 
    

![==image_5==.png](/.attachments/==image_5==-c3751f23-2bb8-441f-89bc-b9bd15f9d0b3.png) ![==image_6==.png](/.attachments/==image_6==-d94e6304-0354-45ba-a62f-271f471dc13c.png)  

*   user_profile.html 
    

![==image_7==.png](/.attachments/==image_7==-4238114b-d593-437c-8927-a4d63ee6e0bf.png)  

![==image_8==.png](/.attachments/==image_8==-4bd82ebe-afc6-4b93-91d9-b2a790ca0aa3.png)  

*   save_reading_session.html 
    

![==image_9==.png](/.attachments/==image_9==-135cec7e-10c6-41f7-afe7-6b731d46ad5f.png)  

![==image_10==.png](/.attachments/==image_10==-b30068af-7157-43ec-a84e-5eb2ecda3106.png)  

![==image_11==.png](/.attachments/==image_11==-0cdf52fd-52ec-41d7-b71f-a9631898e563.png)  

![==image_12==.png](/.attachments/==image_12==-a3ebd687-f8e8-4a9e-baf3-c781e2985dc9.png)  

*   tracking.html 
    

![==image_13==.png](/.attachments/==image_13==-757f7c4b-8018-45de-b03a-0ccab525226d.png)  

*   ratingPage.html 
    

![==image_14==.png](/.attachments/==image_14==-f2daea52-9e4a-4007-be31-4213304edbfc.png)  

*   ReviewPage.html 
    

![==image_15==.png](/.attachments/==image_15==-4a9ee310-11ad-4235-ba4e-243a99acf50c.png) ![==image_16==.png](/.attachments/==image_16==-b33927e4-c6d0-4af7-9992-72aa71c4d23d.png)  

*   communityReviewsPage.html 
    

![==image_17==.png](/.attachments/==image_17==-11ebe285-5b69-457a-9162-be43be92eae9.png)  

![Paragraph locked by Amylouis Brown](https://res-1.cdn.office.net/officeonline/hashed/83987e0f63d43f20/we_version2.png "Paragraph locked by Amylouis Brown")

สิ่งที่ยังไม่เสร็จสมบูรณ์ 

*   UI ของ Website บางส่วนยังต้องมีการปรับแก้ให้สวยงามและใช้งานได้ง่ายมากขึ้น 
    

*   หน้า add friend 
    

*   การทำงานของ Website function บางอย่างยังไม่สามารถทำงานได้อย่างเต็มที่ 
    

*   Test coverage อาจต้องมีการปรับแก้เพื่อให้ cover ได้ 100% 
    

*   การเก็บข้อมูลยังต้องมีการปรับแก้ให้เก็บข้อมูลละเอียดมากขึ้นเพื่อความเสถียรในการทำงานของ website

Unit test 

Implementation 

Testcases description 

| <br><br>Test Suite <br><br><br><br><br> | <br><br>Describe <br><br><br><br><br> | <br><br>Test Unit <br><br><br><br><br> | <br><br>Describe <br><br><br><br><br> |
| --- | --- | --- | --- |
| <br><br>1. Test Class BookReviewManager : getBookById <br><br><br><br><br> | <br><br>ทดสอบว่าฟังก์ชัน addBook ของ BookReviewManager ทำงานถูกต้องหรือไม่ <br><br><br><br><br> | <br><br>*   should add books correctly <br>    <br><br><br><br> | <br><br>ทดสอบว่าเมื่อเพิ่มหนังสือ 2 เล่มลงใน bookManager แล้ว จะสามารถดึงข้อมูลหนังสือออกมาได้ถูกต้อง <br><br><br><br><br> |
| <br><br>2. Test Class BookReviewManager : summarizeByRating <br><br><br><br><br> | <br><br>ทดสอบการสรุปรีวิวตามคะแนน (rating) ของแต่ละหนังสือ <br><br><br><br><br> | <br><br>*   should summarize reviews by rating correctly <br>    <br><br><br><br> | <br><br>ช่วยให้มั่นใจว่า summarizeByRating() สามารถสรุปจำนวนรีวิวที่มีคะแนนต่าง ๆ ได้ถูกต้องตามที่คาดหวัง <br><br><br><br><br> |
| <br><br>3. Test Class BookReviewManager : sortByRating <br><br><br><br> | <br><br>ทดสอบการจัดเรียงหนังสือตามคะแนนเฉลี่ย (average rating) ของรีวิว <br><br><br><br><br> | <br><br>*   should sort books by average rating correctly <br>    <br><br><br><br> | <br><br>ทดสอบการจัดเรียงหนังสือตามคะแนนเฉลี่ยของรีวิวจากมากไปน้อย <br><br><br><br><br> |
| <br><br>4. Test Class BookReviewManager : searchBooks <br><br><br><br> | <br><br>ทดสอบการค้นหาหนังสือตามชื่อ (title) หรือผู้เขียน (author) <br><br><br><br><br> | <br><br>*   should search books by title or author correctly <br>    <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน searchBooks() ของ BookReviewManager ซึ่งมีหน้าที่ค้นหาหนังสือตามชื่อ (title) หรือผู้เขียน (author) ที่ตรงกับคำค้นที่ผู้ใช้ระบุ <br><br><br><br><br> |
| <br><br>5. Test Class BookReviewManager : loadBooksFromFile <br><br><br><br> | <br><br>ทดสอบกรณีที่ไฟล์ไม่สามารถโหลดได้ <br><br><br><br><br> | <br><br>*   should not load books if file does not exist <br>    <br><br>*   should load books from file correctly <br>    <br><br><br><br> | <br><br>*   ทดสอบการทำงานของฟังก์ชัน loadBooksFromFile() ในกรณีที่พยายามโหลดไฟล์ที่ไม่มีอยู่จริง <br>    <br><br>*   ทดสอบการทำงานของฟังก์ชัน loadBooksFromFile() ว่าสามารถโหลดข้อมูลจากไฟล์ที่มีข้อมูลหนังสืออยู่ได้อย่างถูกต้องหรือไม่ <br>    <br><br><br><br><br> |
| <br><br>6. Test Class BookReviewManager : getAllBooks <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน getAllBooks() เพื่อดึงหนังสือทั้งหมดจาก bookManager <br><br><br><br><br> | <br><br>*   should get all books correctly <br>    <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน getAllBooks() ของ BookReviewManager ว่าสามารถดึงข้อมูลหนังสือทั้งหมดที่ถูกจัดเก็บไว้ใน bookManager ได้อย่างถูกต้องหรือไม่ <br><br><br><br><br> |
| <br><br>7. Test Class BookReviewManager : saveBooksTofile <br><br><br><br> | <br><br>ทดสอบการบันทึกข้อมูลของหนังสือไปยังไฟล์ <br><br><br><br><br> | <br><br>*   should save books to file correctly <br>    <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน saveBooksToFile() ของ BookReviewManager ว่าสามารถบันทึกข้อมูลหนังสือไปยังไฟล์ได้ถูกต้องหรือไม่ <br><br><br><br><br> |
| <br><br>8. Test Class BookReviewManager : addBooks <br><br><br><br> | <br><br>ทดสอบกรณีที่เพิ่มหนังสือที่ไม่มีรีวิวเข้ามาในระบบ <br><br><br><br><br> | <br><br>*   should handle book with no reviews correctly <br>    <br><br><br><br><br> | <br><br>ทดสอบกรณีที่มีหนังสือที่ยังไม่ได้รับการรีวิวในระบบ และตรวจสอบว่าระบบสามารถจัดการกับหนังสือที่ไม่มีรีวิวได้ถูกต้องหรือไม่ <br><br><br><br><br> |
| <br><br>9. Test Class BookModel : addReview and getReviews <br><br><br><br> | <br><br>ทดสอบการเพิ่มรีวิวใหม่ไปยังหนังสือที่มีอยู่แล้ว <br><br><br><br><br> | <br><br>*   should add review to existing book <br>    <br><br><br><br><br> | <br><br>ทดสอบการเพิ่มรีวิวใหม่ให้กับหนังสือที่มีอยู่ในระบบแล้ว และตรวจสอบว่ารีวิวถูกเพิ่มเข้าไปอย่างถูกต้อง <br><br><br><br><br> |
| <br><br>10. Test Class BookModel : getAverageRating <br><br><br><br> | <br><br>ทดสอบการคำนวณคะแนนเฉลี่ยของรีวิวในหนังสือ <br><br><br><br><br> | <br><br>*   should calculate average rating correctly <br>    <br><br><br><br><br> | <br><br>ทดสอบการคำนวณคะแนนเฉลี่ย (average rating) ของรีวิวที่ถูกเพิ่มให้กับหนังสือแต่ละเล่ม ว่าถูกคำนวณอย่างถูกต้องหรือไม่ <br><br><br><br><br> |

Test coverage and code 

*   Report ผลการ test ที่ได้ 
    

![==image_0==.png](/.attachments/==image_0==-2045fcf2-8691-4ec4-875e-38f006011046.png) ![==image_1==.png](/.attachments/==image_1==-a8f8fc30-bd33-4062-9157-440dfc75739a.png) ![==image_2==.png](/.attachments/==image_2==-2c575ecf-25a5-4ed3-a246-6109b4ef306d.png) ![==image_3==.png](/.attachments/==image_3==-7269684a-dcca-4292-8785-6973fac4fc28.png) ![==image_4==.png](/.attachments/==image_4==-f1c36387-ea7b-42ed-a7c7-06150bf5dc32.png) ![==image_5==.png](/.attachments/==image_5==-eada8eff-63c7-403d-b776-8eab8f23d8f0.png)  

สรุป : จากการทดสอบ Test Coverage ทั้ง 2 ไฟล์ คือ bookModel.test.js และ bookReviewManager.test.js มีผล Test Coverage ของทั้ง 2 ไฟล์มากกว่า 80% สำหรับ Statements Coverage โดยใช้ Test cases ทั้งหมด 11 Cases ผ่าน 9 tests และไม่ผ่าน 2 tests

Example of test code with comments 

1.  Test Class BookReviewManager : getBookById 
    

![==image_0==.png](/.attachments/==image_0==-1cfcc3f3-1390-4dfe-8937-92bff4b1a31f.png)  

2.  Test Class BookReviewManager : summarizeByRating 
    

![==image_1==.png](/.attachments/==image_1==-d8e27ef0-e920-4d25-b7da-98f1de702024.png)  

3.  Test Class BookReviewManager : sortByRating 
    

![==image_2==.png](/.attachments/==image_2==-4c869fa6-f6e9-421c-ad23-e9315f84a47d.png)  

4.  Test Class BookReviewManager : searchBooks 
    

![==image_3==.png](/.attachments/==image_3==-07fd1911-ec1b-486b-b4c7-f1ae80db8bb2.png)  

5.  Test Class BookReviewManager : loadBooksFromFile 
    

![==image_4==.png](/.attachments/==image_4==-cade5fda-132c-4eda-b3be-18bda5b9b4a7.png)  

6.  Test Class BookReviewManager : getAllBooks 
    

![==image_5==.png](/.attachments/==image_5==-d3ec681d-f265-4642-b036-c8aa7f275155.png)  

7.  Test Class BookReviewManager : saveBooksTofile 
    

![==image_6==.png](/.attachments/==image_6==-5cc1756d-e613-4614-8da7-627a1beb2ef5.png)  

8.  Test Class BookReviewManager : addBooks 
    

![==image_7==.png](/.attachments/==image_7==-1d0d339b-0b24-4368-b966-e64757c35671.png)  

9.  Test Class BookModel : addReview and getReviews 
    

![==image_8==.png](/.attachments/==image_8==-0b47d2cf-f8ed-4b65-9072-fba54ae069f5.png)  

10.  Test Class BookModel : getAverageRating 
    

![==image_9==.png](/.attachments/==image_9==-6a026f87-c194-467d-a6ab-397545641697.png) 