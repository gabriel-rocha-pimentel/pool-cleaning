'use client'

export default function Page() {
    function hiUser() {
        alert("Hi User!!!")
    }

    return (
        <main className="flex items-center justify-center p-6">
            <div className="flex flex-col items-center justify-center p-4">
                <h2 className="text-black">Aperte o Botão</h2>
                <button className="text-white p-3 text-center rounded-lg bg-red-600" onClick={hiUser} type="button">HI COMPUTER</button>
            </div>
        </main>
    );
}