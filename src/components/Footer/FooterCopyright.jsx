export default function FooterCopyright() {
  return (
    <div className="text-center text-white/50 text-sm mt-16 pt-6 border-t border-white/10">
      © {new Date().getFullYear()} Celestium. All rights reserved.
    </div>
  );
}
