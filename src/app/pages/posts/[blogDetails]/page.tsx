"use client"
import Navbar from "@/components/common/Navbar";
import BlogDetails from "@/app/pages/posts/blog/BlogDetails";
import Footer from "@/components/common/Footer";
import { useViewBlogDetailsQuery } from "@/redux/blog/blogSlice";
import blogPosts from "@/lib/blogData";


const BlogDetailsPage =({params}:any) => {
   console.log("params", params);
   const blogId = params?.blogDetails || {};
   console.log(
  "blogID", blogId
   );
  //  as im using dummy data that's why using this, it's not applicable for api call
   const blog = blogPosts.find((item) => item.id == blogId);
   console.log(
    "details", blog
   );
   // this is for dynamic api calling
   //@ts-ignore
  //  const {data} = useViewBlogDetailsQuery(blogId)
  //  console.log("details data", data);
  //  const data = await getData(blogId);
  return (
    <div className="bg-[#FFFFFF] ">
      <Navbar
        textColor="#343F52"
        buttonBorderColor="none"
        buttonColor="#153870"
        buttonTextColor="#FFFFFF"
        buttonHoverColor="#016B90"
        buttonHoverTextColor="#FFFFFF"
        dropdownBgColor="white"
      />
      {/* blogId={blogId} */}
     <BlogDetails  blog={blog}/>
      <Footer  textColor="#133366" iconColor="#133366" />
    </div>
  );
};


// type Props = {
//   params: { blogId: string };
// };

// export const generateMetadata = async (props: Props): Promise<Metadata> => {
//   const { params } = props;
//   const blog = await getBlogById(params.blogId);
//   return {
    
//     // author:blog.author,
//     // description: blog.short_description,
//     openGraph: {
//       title: blog.title,
//       description: blog.content,
//       images: [
//         {
//           url: blog.image,
//           width: 800,
//           height: 600,
//           alt: blog.name,
//         },
//       ],
//     },
//   };
// };


// async function getData(blogId: string) {
//   // Fetch data from external API
//   // const res = await fetch(`https://.../data`)
//   // const data = await res.json()

//   // Pass data to the page via props
//   // const {
//   //   data,
//   //   isLoading,
//   //   isError,
//   //   refetch: refetchProducts,
//   // } = useGetProductByIdQuery(productId);
//   // const a = await fetch
//   const data = await getBlogById(blogId,{refresh:true});
//   console.log("data",data);
//   return data;
// }

export default BlogDetailsPage;


