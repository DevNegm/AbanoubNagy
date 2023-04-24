import { createClient } from "contentful";
const useContentful = () => {
    const client = createClient({
        space:"htis83wsk3n4",
        accessToken:"rRk2Jf50M95TzLqVTp7TtcxkBYvUICSBWVmOLAEy9Cc",
        host: "preview.contentful.com"
    });
    const getProjects = async () => {
        try {
           const entries = await client.getEntries({
                content_type:"projects",
                select:"fields"
            });
            const sanitizedEntries = entries.items.map((item) => {
                const image = item.fields.image.fields;
                return {
                    ...item.fields,
                    image
                }
            })
            return sanitizedEntries
        } catch (error) {
            console.log('error',error)
        }
    }
   
    return {getProjects}
}
export default useContentful;