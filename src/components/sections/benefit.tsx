import Image from "../../types/Image";

type BenefitProps = {
 title: string; 
 image: Image;
};

export default function Benefit({ title, image }: BenefitProps) {
 return (
<section className="flex flex-col items-center justify-center max-w-[1200px] mx-auto">
 <div> {/* No need for extra div or classes here */}
 <h2>{title}</h2>
</div>
 <div> {/* No need for extra classes here */}
<img src={image.url} alt={image.alt} />
 </div>
</section>
 );
}
