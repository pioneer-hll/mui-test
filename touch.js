/**
 * Created by Administrator on 2017/7/11.
 */
'use strict';
$(function () {
    // ��ȡ��ָ���ֲ�ͼԪ���ϵ�һ�������������ң�

    // ��ȡ�������ֲ�ͼ����
    var $carousels = $('.carousel');
    var startX,endX;
    // �ڻ�����һ����Χ�ڣ����л�ͼƬ
    var offset = 50;
    // ע�Ử���¼�
    $carousels.on('touchstart',function (e) {
        // ��ָ������ʼʱ��¼һ����ָ���ڵ�����x
        startX = e.originalEvent.touches[0].clientX;

    });
    $carousels.on('touchmove',function (e) {
        // Ŀ���ǣ���¼��ָ�뿪��Ļһ˲���λ�� ����move�¼��ظ���ֵ
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function (e) {
        //console.log(endX);
        //��������һ˲���¼��ָ�����������x��λ�� endX
        //�Ƚ�endX��startX�Ĵ�С������ȡÿ���˶��ľ��룬���������һ��ֵʱ��Ϊ���з���ı仯
        var distance = Math.abs(startX - endX);
        if (distance > offset){
            //˵���з���ı仯
            //���ݻ�õķ��� �ж�����һ�Ż�����һ�ų���
            $(this).carousel(startX >endX ? 'next':'prev');
        }
    })
});