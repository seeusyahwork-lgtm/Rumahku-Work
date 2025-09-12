import React from 'react'

const CDI_Progres = () => {
    return (
        <div><div>
            <form className="px-2 md:px-2 max-w-3xl mx-auto ml-10 py-6">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Nama ProgresCDI_Progres -
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            berikut adalah form pengisian ProgresCDI_Progres baru penginputan tentang nama
                            pemilik, nama ProgresCDI_Progres, perancangan, perencanaan, petugas mengawasi
                            dan alamat ProgresCDI_Progres
                        </p>
                        <div className="divider mt-8">ProgresCDI_Progres</div>
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Nama ProgresCDI_Progres
                                </label>
                                <div className="">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-4 text-gray-500 sm:text-sm">
                                            ProgresCDI_Progres/ -
                                        </span>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Rumah type 36 - Melati"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    About
                                </label>
                                <div className="">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Catatan mengenai pekerjaan dan yang di highlight dalam
                                    pengerjaannya
                                </p>
                            </div>
                            <div className="col-span-full">
                                {" "}
                                {/* Upload Gambar kerja */}
                                <label
                                    htmlFor="cover-photo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Upload Gambar kerja
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-300"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">
                                            DWG atau PDF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                {" "}
                                {/* Upload RAB kerja */}
                                <label
                                    htmlFor="cover-photo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Upload RAB (Rancangann Anggaran Biaya) kerja
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-300"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload File RAB</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">
                                            PDF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Pengawas ProgresCDI_Progres
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Cecep Suparman</option>
                                        <option>Cahya Saripudin</option>
                                        <option>Wahid Sugianto</option>
                                    </select>

                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Mandor
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Cecep Suparman</option>
                                        <option>Cahya Saripudin</option>
                                        <option>Wahid Sugianto</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Konsumen
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Cecep Suparman</option>
                                        <option>Cahya Saripudin</option>
                                        <option>Wahid Sugianto</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div></div>
    )
}

export default CDI_Progres