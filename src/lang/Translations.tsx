interface Translation {
    [key: string]: string;
}

interface Translations {
    [language: string]: Translation;
}
const Translations: Translations = {
    en: {
        units: "Units",
        imperial: "Imperial",
        metric: "Metric",
        subjectDistance: "Subject Distance",
        focalLength: "Focal Length",
        aperture: "Aperture",
        sensorSize: "Sensor Size",
        subject: "Subject",
        contribute: "Contribute to this open source project on GitHub.",
        ft: "ft",
        m: "m",
        mm: "mm"
    },
    zh: {
        units: "单位",
        imperial: "英制",
        metric: "公制",
        subjectDistance: "主体距离",
        focalLength: "焦距",
        aperture: "光圈",
        sensorSize: "传感器尺寸",
        subject: "拍摄主体",
        contribute: "在GitHub上为这个开源项目做贡献。",
        ft: "英尺",
        m: "米",
        mm: "毫米"
    }
};

export default Translations;
