const ATTRIBUTES = {
    class: 'class',
    id: 'id',
    src: 'src',
    style: 'style',
    inputValue: 'value',
    inputType: 'type'
}

const HTML_ELEMENTS = {
    div: () => document.createElement('div'),
    p: () => document.createElement('p'),
    h1: () => document.createElement('h1'),
    input: () => document.createElement('input'),
    img: () => document.createElement('img'),
}


fetch('json/data-content.json')
    .then(res => res.json())
    .then(data => {

        //JSON data extractor
        const contents = {
            "service": data.Service,
            "testimonial": data.Testimonial,
            'blog': data.Blog
        }
        

        function Services() {

            contents.service.forEach((value, index) => {

                    const title = value.title;
                    const description = value.description;
    
                    const services_card = HTML_ELEMENTS.div();
                    services_card.setAttribute(ATTRIBUTES.class, 'services_card info_cards');
                    services_card.innerHTML = `
                        <div>
                            <img src="assets/Icons/verified_symbol_icon.svg" alt="" srcset="">
                        </div>
                        <div>
                            <div>
                                <h1>${title}</h1>
                                <p>${description}</p>
                            </div>
                            <input type="button" value="Read More">
                        </div>`;
    
                    const services_container = document.querySelector('.services_content');
                    services_container.appendChild(services_card);
            });

        }


        function Testimonials() {
            contents.testimonial.forEach((value, index) => {

                const author = value.author;
                const profession = value.profession;
                const comment = value.comment;
                const profile_pic = value.profile_pic;


                const testimonial_card = HTML_ELEMENTS.div();
                testimonial_card.setAttribute(ATTRIBUTES.class, 'testimonial_card info_cards');
                testimonial_card.innerHTML = `
                    <div>
                        <img src="assets/Icons/testimonial_icon.svg" alt="" srcset="">
                        <p>${comment}</p>
                        <img src="assets/Icons/testimonial_icon.svg" alt="" srcset="">
                    </div>
                    <div>
                        <div>
                            <p class="author_name">${author}</p>
                            <p class="author_profession">${profession}</p>
                        </div>
                        <img class="testimonial_profile" src="${profile_pic}" alt="">
                    </div>`;

                const testimonials_container = document.querySelector('.testimonials_content')
                testimonials_container.appendChild(testimonial_card);


            });
        }


        function Blogs() {
            contents.blog.forEach((value, index) => {

                const title = value.title;
                const date = value.date;
                const total_comments = value.total_comments;
                const total_views = value.total_views;
                const total_shares = value.total_shares;
                const cover_photo = value.cover_photo;
                const profile_pic = value.profile_pic;

                const blog_item_card = HTML_ELEMENTS.div();
                blog_item_card.setAttribute(ATTRIBUTES.class, 'blog_item_card info_cards');
                blog_item_card.innerHTML = `
                    <div class="header">
                        <img src="${cover_photo}" alt="">
                        <img src="${profile_pic}" alt="">
                    </div>
                    <div class="body_content">
                        <div>
                            <p>${date}</p>
                            <h1>${title}</h1>
                        </div>
                        <div>
                            <div class="item">
                                <img src="assets/Icons/mail.svg" alt="">
                                <p>${total_comments}</p>
                            </div>
                            <div class="item">
                                <img src="assets/Icons/remove_red_eye.svg" alt="">
                                <p>${total_views}</p>
                            </div>
                            <div class="item">
                                <img src="assets/Icons/share.svg" alt="">
                                <p>${total_shares}</p>
                            </div>
                        </div>
                    </div>`;

                    const blogs_container = document.querySelector('.blogs_content');
                    blogs_container.appendChild(blog_item_card);

            });
        }



    Services();
    Testimonials();
    Blogs();
        
})