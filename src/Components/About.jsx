import React from 'react';

const About = () => {
    return (
        <div className="mt-20 px-4">
            <h1 className="text-3xl font-bold text-center   ">About Us</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto min-h-screen px-4">
                <div className="w-full lg:w-1/2 p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-4 text-center">
                    <p className="text-lg leading-relaxed">
                        At <strong className='text-orange-500'>Gessdemn Virtuals</strong>, we specialize in real estate photo editing, virtual staging, and floor plan design to help properties stand out. Our expert team enhances images with advanced editing techniques, ensuring high-quality, realistic visuals. We provide virtual staging to transform empty spaces into beautifully furnished interiors. Our floor plan services offer precise, visually appealing layouts for better property visualization. With a fast turnaround time and competitive pricing, we cater to realtors, photographers, and property developers. Our goal is to boost property appeal and increase sales through stunning visuals. We use cutting-edge technology to deliver accurate, high-resolution images. Customer satisfaction and attention to detail are our top priorities. Partner with us to make your property listings irresistible. Let’s bring your real estate vision to life!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
