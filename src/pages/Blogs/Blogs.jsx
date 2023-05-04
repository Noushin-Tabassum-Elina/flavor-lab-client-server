import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blogs = () => {
    return (
        <div className='mt-18 p-8 mb-10'>
            <div className='flex items-center justify-between lg:px-4 bg-slate-400 md:flex-row md:justify-between'>
            <h1 className='text-4xl font-bold p-4'>Blogs</h1> 
                <div className='m-16'>
                
                <PDFDownloadLink document={<BlogPost/>} fileName='BLOG'>
                    {({loading}) => (loading ? 'Loading pdf' : <button className="btn w-32 lg:w-60">PDF</button>)}
                </PDFDownloadLink>
                </div>
            </div>
            <BlogPost></BlogPost>
        </div>
    );
};

export default Blogs;