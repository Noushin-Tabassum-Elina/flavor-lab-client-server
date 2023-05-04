import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blogs = () => {
    return (
        <div className='mt-18 p-8 mb-10'>
            <div className='flex flex-col items-center justify-between lg:px-4 py-8 bg-slate-400 md:flex-row md:justify-between lg:py-16'>
                <div className='m-16'>
                <h1 className='text-4xl font-bold'>Blogs</h1> 
                <PDFDownloadLink document={<BlogPost/>} fileName='BLOG'>
                    {({loading}) => (loading ? 'Loading pdf' : <button className="btn w-60">PDF</button>)}
                </PDFDownloadLink>
                <BlogPost></BlogPost>
                </div>
            </div>


        </div>
    );
};

export default Blogs;