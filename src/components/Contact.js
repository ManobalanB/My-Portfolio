
export default function Contact () {

    const config = {
        name: 'MANOBALAN B',
        email : 'manobalanb01@gmail.com',
        phone: '+91 9943873502',
        LinkedIn: 'https://www.linkedin.com/in/manobalan01/'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-3 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Name :</span> {config.name}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>linkedin :</span> {config.LinkedIn}</p>
        </div>
    </section>
}