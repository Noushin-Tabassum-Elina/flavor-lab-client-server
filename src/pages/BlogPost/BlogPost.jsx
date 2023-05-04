import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const BlogPost = () => {

    const styles = StyleSheet.create({

        container: {
            padding: 10,
        },

        blog: {
            backgroundColor: "#ddc1f8",
            padding: 20,
            borderRadius: 10,
            marginBottom: 15
        },

        header: {
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 8
        },

        text: {
            fontSize: 15,
            textAlign: "justify",
        }

    });

    return (
        <Document>

            <Page className='grid grid-cols-1 lg:grid-cols-2 gap-10  lg:ms-32 mt-10' style={styles.container}>
                <View style={styles.blog} className="card-body">
                    <Text style={styles.header}>
                        Question: 1  Tell the differences between uncontrolled and controlled components.
                    </Text>
                    <Text style={styles.text}>
                        Uncontrolled components are those where the form data is handled by the DOM itself instead of the React component. The data is directly accessed from the DOM using refs, and any changes made to the data are not tracked by React. In contrast, controlled components are those where the form data is handled by the React component itself. The component stores the data in its state, and any changes made to the data are reflected in the state. Controlled components are more flexible and allow for better control over form data, while uncontrolled components are easier to set up and require less code.
                    </Text>
                </View>


                <View style={styles.blog} className="card-body">
                    <Text style={styles.header}>
                        Question: 2  How to validate React props using PropTypes
                    </Text>
                    <Text style={styles.text}>
                        To validate React props, you can make use of the PropTypes library. PropTypes allows you to define the type of props that your component expects, as well as any required or default values. This helps ensure that the correct data is being passed to the component, and can prevent errors and bugs in your application.
                    </Text>
                </View>


                <View style={styles.blog} className="card-body">
                    <Text style={styles.header}>
                        Question: 3  Tell the difference between nodejs and express js.
                    </Text>
                    <Text style={styles.text}>
                        Node.js and Express.js are both popular tools used in the development of web applications. Node.js is a JavaScript runtime that allows developers to run JavaScript on the server-side. It provides a range of features such as event-driven programming and non-blocking I/O, which make it particularly useful for building scalable and efficient web applications. Express.js, on the other hand, is a web application framework for Node.js. It provides a range of features such as middleware, routing, and templating, which make it easier to build complex web applications in Node.js.
                    </Text>
                </View>
                <View style={styles.blog} className="card-body">
                    <Text style={styles.header}>
                        Question: 4  What is a custom hook, and why will you create a custom hook?
                    </Text>
                    <Text style={styles.text}>
                        A custom hook is a JavaScript function that allows you to reuse logic across multiple components. It is a way of extracting common functionality into a separate function, which can then be used in multiple components. Custom hooks can help to simplify your code and reduce duplication, and are particularly useful for handling complex or repetitive logic. You might create a custom hook if you find yourself repeating the same code across multiple components, or if you need to extract logic from a component to make it more reusable.
                    </Text>
                </View>

            </Page>
        </Document>
    );
};

export default BlogPost;