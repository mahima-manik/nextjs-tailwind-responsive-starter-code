export default function HeroBanner() {

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-10 bg-emerald-500">
        <div className="flex flex-col flex-1 bg-emerald-600">
            <h1>Responsive Tailwind Starter code</h1>
            <p>Kickstart your web projects swiftly and efficiently using responsive component in flexbox for all screen sizes.</p>
            <p>View now button</p>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center">
            <div className="bg-cyan-950 min-h-full min-w-full">
                Hero Image goes here
            </div>
        </div>
    </div>
)
}
