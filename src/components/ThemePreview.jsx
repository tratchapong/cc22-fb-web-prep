import React from 'react';

const ThemePreview = () => {
  return (
    <div className="min-h-screen bg-base-200 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <section className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">fakebook Theme Preview</h1>
          <p className="text-neutral">แสดงตัวอย่าง Component ที่ใช้โครงสร้างสีของ Facebook</p>
        </section>

        {/* Buttons Section */}
        <section className="card bg-base-100 shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Buttons (ปุ่มกด)</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Primary (Blue)</button>
            <button className="btn btn-secondary">Secondary (Green)</button>
            <button className="btn btn-accent">Accent (Dark Blue)</button>
            <button className="btn btn-neutral">Neutral (Gray)</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link Button</button>
          </div>
        </section>

        {/* Alerts & Status */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Status Colors</h2>
            <div className="space-y-3">
              <div className="alert alert-info shadow-sm py-2 text-sm">Info: ข้อมูลข่าวสาร</div>
              <div className="alert alert-success shadow-sm py-2 text-sm">Success: ดำเนินการสำเร็จ</div>
              <div className="alert alert-warning shadow-sm py-2 text-sm">Warning: โปรดระวัง</div>
              <div className="alert alert-error shadow-sm py-2 text-sm">Error: เกิดข้อผิดพลาด</div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm p-6 text-base-content">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Typography & Base</h2>
            <div className="p-4 bg-base-200 rounded-box">
              <p className="font-bold">Base 200 Background</p>
              <p className="text-neutral text-sm">นี่คือข้อความที่ใช้สี neutral content บนพื้นหลังสีเทาอ่อน</p>
            </div>
            <div className="mt-4 p-4 bg-base-300 rounded-box">
              <p className="font-semibold text-primary">Base 300 & Primary Text</p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="card bg-base-100 shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Forms & Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label"><span className="label-text">อีเมลหรือโทรศัพท์</span></label>
              <input type="text" placeholder="ระบุอีเมล" className="input input-bordered focus:border-primary" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">รหัสผ่าน</span></label>
              <input type="password" placeholder="ระบุรหัสผ่าน" className="input input-bordered" />
            </div>
            <div className="form-control flex flex-row items-center gap-4 mt-8">
              <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
              <span className="label-text">จดจำฉันไว้</span>
            </div>
          </div>
        </section>

        {/* Navigation & Tabs */}
        <section className="card bg-base-100 shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Navigation (Tabs)</h2>
          <div className="tabs tabs-lifted">
            <button className="tab tab-active">ไทม์ไลน์</button>
            <button className="tab">เกี่ยวกับ</button>
            <button className="tab">เพื่อน</button>
            <button className="tab">รูปภาพ</button>
          </div>
        </section>

        {/* Badge & Avatars */}
        <section className="card bg-base-100 shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Badges & Avatars</h2>
          <div className="flex items-center gap-6">
            <div className="avatar online">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com" alt="avatar" />
              </div>
            </div>
            <div className="space-x-2">
              <span className="badge badge-primary">Admin</span>
              <span className="badge badge-secondary">New Post</span>
              <span className="badge badge-outline">Member</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ThemePreview;
