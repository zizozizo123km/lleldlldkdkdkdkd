import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">الصفحة غير موجودة</p>
        <Link to="/" className="inline-block mt-4 text-primary hover:underline">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;