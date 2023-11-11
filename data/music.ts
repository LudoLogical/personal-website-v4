export class MusicEntry {
  title: string;
  composer: string | null;
  audio: string;
  files: string;
  musescore: string;
  constructor(
    title: string,
    composer: string | null,
    audio: string,
    files: string,
    musescore: string
  ) {
    this.title = title;
    this.composer = composer;
    this.audio = audio;
    this.files = files;
    this.musescore = musescore;
  }
}

export const originalsData = [
  new MusicEntry(
    'Final Refrain',
    null,
    'https://drive.google.com/file/d/1i9J3GroH1aWbODoGkL-4EdwpfIAbXNxx/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1EGO7bNzDYDEeMqCN4-OddbgRb8sd_hQg?usp=drive_link',
    'https://musescore.com/user/6394601/scores/9416035'
  ),
  null,
  new MusicEntry(
    'Adventure! Reprise',
    null,
    'https://drive.google.com/file/d/1vvqiFgNjBN1E5P4qOaeEfnSyLcmLcdKr/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1NWcRdBGP_wUrFghqP9nfz9RhloCuHpBd?usp=drive_link',
    'https://musescore.com/user/6394601/scores/9416005'
  ),
  new MusicEntry(
    'Miss This',
    null,
    'https://drive.google.com/file/d/1gJ0fjGMfmjOdL_-SrzvQDv1Jap_wDrXd/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1VLleq9QAGXU-305CpMuytZw52ApoANY-?usp=drive_link',
    'https://musescore.com/user/6394601/scores/1899851'
  )
];

export const arrangementsData = [
  new MusicEntry(
    "If You're the Coffee",
    'The Arcadian Wild',
    'https://drive.google.com/file/d/1hDBQRWwPrH5m1tg42Pz9tjeELOOJ-fJt/view?usp=drive_link',
    'https://drive.google.com/drive/folders/13F8xPEYO6C9VcEROnNyc6J2pYCqLhltA?usp=drive_link',
    'https://musescore.com/user/6394601/scores/10765234'
  ),
  new MusicEntry(
    'Mona Pizza',
    'Kenichi Nishimaki',
    'https://drive.google.com/file/d/1kqCCyPBUre8hndXKt5Bg7zxn3ALFfJ0f/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1OLOTISmIhmu94sRSFaaHtE-hV82aH-Ro?usp=drive_link',
    'https://musescore.com/user/6394601/scores/9426571'
  ),
  new MusicEntry(
    "Gotta Catch 'Em All!",
    'John Siegler and John Loeffler',
    'https://drive.google.com/file/d/1Cppvg1V-GhFsj4oNEeN2Wv6yAOxeoT_v/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1rrbP--lCILqLhwNC07cAScxFhYLj5b-B?usp=drive_link',
    'https://musescore.com/user/6394601/scores/9416038'
  ),
  new MusicEntry(
    'Video Game Medley',
    'Various Composers',
    'https://drive.google.com/file/d/1Ki8E4nrbj0pxWEqhAnzTP3Zj80954BE1/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1RISo6RVUJ_nqKXdaZNmPXtiSNceNwV7U?usp=drive_link',
    'https://musescore.com/user/6394601/scores/9416071'
  ),
  new MusicEntry(
    'Peppermint Winter',
    'Owl City',
    'https://drive.google.com/file/d/1IMYCI17yiJNebQICuoMdiszVxCyyhIem/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1m0Al1Z8L2ajmUHUrJhZWUofQ1ugPiNou?usp=drive_link',
    'https://musescore.com/user/6394601/scores/9416059'
  ),
  new MusicEntry(
    'Stronger',
    'Lacy Wilder',
    'https://drive.google.com/file/d/1qdND0HKS1O2tWmArq6ge-se0ntyMDGxT/view?usp=drive_link',
    'https://drive.google.com/drive/folders/1Cdn1wXCFkpNW_DlzmGSoKfY3DyjmZUA6?usp=drive_link',
    'https://musescore.com/user/6394601/scores/3307551'
  )
];

class BeepboxEntry {
  title: string;
  audio: string;
  link: string;
  constructor(title: string, audio: string, link: string) {
    this.title = title;
    this.audio = audio;
    this.link = link;
  }
}

export const beepboxData = [
  new BeepboxEntry(
    'Mystery Factory',
    'https://drive.google.com/file/d/1V9Fs_Z1J3GNmnX8YDEYa4WlfYwd14Gn5/view?usp=drive_link',
    'https://beepbox.co/#5sbkbl00e07t7a7g07j7i0r1w0111f0000d1111c0000h0000v0000o3210b4h4h4h8Ohktxsid5c04y8wp22Pxj7apmCSiHFGHLFGF3h3hpjlpnjlnpjli6w2Cviru3NShOn9j7GCCD9E3DkRpez9HFFOq0VldmjE9QQ1Oqp79QpdJdejhAQRlQR8QSY8WpZQMJddddeCGSCCCCDjbRkQQQQWqraqkNMrcCPjJNS8QN0id16wd0q0W0S1F3i6Ad8qgQxQD10'
  ),
  new BeepboxEntry(
    'Excite!',
    'https://drive.google.com/file/d/1p35RWSTLmGGqxAgtbJ38AdZgeVea6NgR/view?usp=drive_link',
    'https://beepbox.co/#5sbk4l00e07t7a7g07j7i0r1w1111f0000d1111c0000h0000v0000o3330b4h8h4w0i4h80018Q0i8y8Mp25lFxNj8QOdkzl9RRkRRmRkSSkSlmlmRRkRRmRqrraraHaHqWGqWHqGrraraHaHaGGQPY0FxxMIzjpl9lkRlkRlmlkSmkSlmlkRlkRlmlqrbaraHaGqGGqGHaGrbaraHaGqqGQP-VRQz8ROs3j0SSmlQSkwJFFGGAGFeKGCKGhGMId8QOlkBljlljllpljppjplpljlljllplFIIFIGIGFGGFGGIGFIIFIGIGFFGHM0kPWEEj71wqqF2CGCGTwd56j8QRkRkRlSYT9KM30o79OHcODrDkVmnjBpdiqpgkNe8Q4q0Q1E2C10a0swdoqgQxF3i6Ad8t8qgQxF3i6wd0qgw'
  ),
  new BeepboxEntry(
    'Oriental!',
    'https://drive.google.com/file/d/1JwTiolh2sSQphK45hYVvTSN44uhxIpHN/view?usp=drive_link',
    'https://beepbox.co/#5s0k4l00e0bt7a7g0bj7i0r1w1111f0000d1111c0000h0000v0000o3320b4x8i4zgQ4x9mlzgQ4x8Qd01m4h4h4h4hp23_FCQC74BniCe70QQXSNjlqCCPSdyGCDyqGqJHoIAXKaYhjl8OcB8QQQQQRlSmXU6CiHFIKKGFGO0FCWC74B8QFzP8QQXmTjj0FFKZzpFFFUy1FFQ7oFFFUHJSkRmmkMm1FFx8qhOv7YvvN-PITW5EszlpND8GFGJFKAUaGCH8apDgszjkCriqrnqFGFGSJCCfA3Lp43we1gddmTOqGqH0SOtZldmhO96hAF6iAqqqqqqGXbtY3j9lQSnnlmkV000'
  ),
  new BeepboxEntry(
    "We're Finally Done",
    'https://drive.google.com/file/d/1SRa1DYhhUOnUcunlhTivCU3RM02wT0nm/view?usp=drive_link',
    'https://beepbox.co/#5sbk4l00e0jt7a7g0jj7i0r1w1111f0000d1111c0000h0000v0000o3210b018h4h80d3cPd14jh4h5pCtCpCs15i8zi04lpCpU018PcP804zcPcwp27oFxPhhh9kki8aqqWqqo6OyyyOyyIaoYQOfbEEEHEEH1jjrjjjrphhhphgCEjOaaaaqXagmmgddddld555JBJ8tyKPAQkkmlSkwIIJFFFGFEEEJIJSKnhhhjnni2OOSCCCGCyyy1wo711j3GyyyKyyh1jjj0QRilB555t55okNVFHIMXSCqpFCPGpFCRw1nttRTuLntKOj18HQPjdcT_jdcT-5CftRTv_zWaabGabgkQQMddlJB555t52qw7NEEEExqa945ddc3jl9mkkklQklxVCCLBQkklQklwFFFIFGIIEEEHEET-hhhhv8O5896GGCCCGOyyyOOOAeNjpPaaabbbagmllkQQRmkkkmmmrv8EEEHHHF1plljjjlphhhnp0U5qr6cvcRtbzjXJdf3jf0FXtXmTnjsdWPoPKcvDBKgesw_ej6CNKRcew7yZcBZcBRcf8DOv9ELj8QN0gQ1Vl5Wpbw'
  ),
  new BeepboxEntry(
    'Prove Yourself',
    'https://drive.google.com/file/d/1bJdA2-GZZBq5ex-Wk92B_0EpTGLqkG5N/view?usp=drive_link',
    'https://beepbox.co/#5sbk7l02e0dt7a7g0fj7i0r1w1161f0000d1111c0000h0000v0100o3210b4x8id3hmlBo04x8Qd0tmlw0i4x8i018i014h8y8j8y8p24QFzMC7czAFBFr5dmPlnAp5aqAxOJKP9UPoFGSqGIDcAAR7uhKSVf6X5dmPlJl9GIZLyGIDyZyCHpGSGubFDNnnnnmCCTOGGGWrsMFzx9xN8papZrdmPn8VmjkCFPOJyL9UPpGSr839Pr4R7qqvveRSlQOvaPb4OZIjlpINU-EmKWXHKMqKXtAxV4wHKKSqrCY_WHHKKWXwhWXJSi7Ai2KXdP_CLMCOWhmqv5gh2PiMi1CFxHZ_X_QtwT10aC01Mocd8qgQxF3i6AeBh00LaOsH9OIDaOsH9OIDaOuk6Ed8qgQxF38kQk0'
  ),
  new BeepboxEntry(
    'THEY ARE COMING',
    'https://drive.google.com/file/d/1SvbCtuqJD6OL_bHhFmitGZwFV6tl-EcJ/view?usp=drive_link',
    'https://beepbox.co/#5sbk9l00e07t6abg07j7i0r1w1111f0000d1111c0000h0000v0000o3220b4xd5hx8jhkoi4Ql64x8i4wp23cFDN0M5tdltdiq_fbGGwqGGGGIPClRSllmkOmlPrrqXqGWqsOHDNBZeP8RkOdlCPT9SraHrarARTiCLPj2lqapa0RRMdmSCCTlqCDSCvuRHFSZhjni4FDxgdlltqq-30XGGXdsd9gL6m-WGkwsO1SlU7lrBWGrkRQxaqo4CpZ0SpA0kOdPcCuGGyvy-bE7N5QOfypJXcCvQC0'
  ),
  new BeepboxEntry(
    'Lullaby for Monsters',
    'https://drive.google.com/file/d/1b5Yf7F8syRWi5Ac-mO8PTdD4z3oBzSzo/view?usp=drive_link',
    'https://beepbox.co/#5sbkbl00e03t7a7g03j7i0r1w1111f0000d1112c0000h0000v0022o3210b4zgh4xd24h4p21cFD1FzN09HJW3jlHSatDpFAtKNjJrtduLoGSZOCE9tcWG2YL0Q5MarxZo79X0Fy03j0E6i6Yd1x00'
  ),
  new BeepboxEntry(
    'Psychotic Smile',
    'https://drive.google.com/file/d/1VRZr9Vq5mOASpXtmdA51_V6ITyFcbcB-/view?usp=drive_link',
    'https://beepbox.co/#5sbk9l00e07t7a7g07j7i0r1w1111f0000d1111c0000h0000v0000o3220b4xd5hx8jhkoi4Ql64x8Qd0p23SFDR8kMddldC0FAV2CBdf_CnnnM5elOaWqGU70qKv6n6rltBmVScSHbbtMFzP8QQOcxjjhpjjh8kQWGGqkQ-cyGCD9VlddejBQQSpLeFFFwaqqqXaqsHAkQQRkQQSTkQVDbGFFHFFFLAaqsEGWneBNaquz8YCI0FVkU5tPuPqZ5Q3lLIAqyCpRiow8sCH9FGj0w6RGFSwVdlelI0StmPjlI0SJHoEOqqIw6RGSqqJw6RJrdejjlA0Sw'
  ),
  new BeepboxEntry(
    'Hyperspace Wanderer',
    'https://drive.google.com/file/d/1KPLu6vohpevGk43EJIAayVknYGH81uG1/view?usp=drive_link',
    'https://beepbox.co/#5s0k4l04e07t6a7g0bj7i1r1w33336611f11000000d12111211c00000000h00000000v00001100o3210b4xci4Ql6000i4Ql6000i4Rpk000j52kCp24wltbzjOBeSmCkSdhsGsjYPb9WpPfaDcszIAgFzFkM8qGGwTRRxGGGgQlQxEFFjo_4ejli6yCBcYaGCL3wdY26GGEdttoqGGId5t8qaqt5MVdl8qaqkSd21lQKdf9rjhMkNVjjVu8BdzpltfziVNcY6CCHOaSLzbXPKuV-8DCgkNe31xF3i6Ad8qgQxqgS1F3i6Ad8qgQxqgR1F3i6Aao4wE1g2w55553AxF3i6Adgsw50a0k0EEEEsEd8qgQxF3AwE1g2w55553AxF3i6Adgsw50a0k0EEEE0'
  )
];
