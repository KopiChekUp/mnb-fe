interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  views: string;
  image: string;
}

interface PopularWorksProps {
  items: PortfolioItem[];
}

export default function PopularWorks({ items }: PopularWorksProps) {
  return (
    <div className="flex-[1] bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="font-extrabold text-gray-900 mb-4">Karya Populer</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative h-32 rounded-2xl overflow-hidden mb-3">
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                👁 {item.views}
              </div>
            </div>
            <h4 className="font-extrabold text-gray-900 text-sm">{item.title}</h4>
            <p className="text-[10px] text-gray-500 mt-0.5">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
