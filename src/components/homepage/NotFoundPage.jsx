import { Link } from "react-router-dom";

function NotFoundPage() {
    
    return(
        <div class="flex flex-col gap-2">
            404 Not Found
            <Link to="/">Home</Link>
        </div>
        
    );
}
export default NotFoundPage;