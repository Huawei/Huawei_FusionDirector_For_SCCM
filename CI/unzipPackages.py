# coding=utf-8
# ************************************************************************
# Copyright (C) 2019 Huawei Technologies Co., Ltd. All rights reserved.
# This program is free software; you can redistribute it and/or modify
# it under the terms of the MIT license.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# MIT license for more detail.
# ************************************************************************

import os
import zipfile
import tarfile
import logging
import shutil
import subprocess
import sys

PLUGIN_OPENSOURCE = "open_source"
VENDOR = "vendor"

NEWTONSOFT_JSON_PATH = "%s\\Newtonsoft.json" % PLUGIN_OPENSOURCE
NLOG_ADVANCED_NET_LOGGING_PATH = "%s\\NLog - Advanced .NET Logging" % PLUGIN_OPENSOURCE
CEFSHARP_PATH = "%s\\CefSharp" % PLUGIN_OPENSOURCE
SYSTEM_DATA_SQLITE_PATH = "%s\\System.Data.SQLite" % PLUGIN_OPENSOURCE
VISUAL_STUDIO_PATH = "%s\\Distributable Code for VISUAL STUDIO 2017 PROFESSIONAL AND TRIAL EDITION" % VENDOR
CHART_JS_PATH = "%s\\chart.js" % PLUGIN_OPENSOURCE
ELEMENT_UI_PATH = "%s\\element-ui" % PLUGIN_OPENSOURCE
JQUERY_JAVASCRIPT_LIBRARY_PATH = "%s\\jQuery JavaScript Library" % PLUGIN_OPENSOURCE
LODASH_PATH = "%s\\lodash" % PLUGIN_OPENSOURCE
POLYFILL_PATH = "%s\\polyfill" % PLUGIN_OPENSOURCE
VUE_PATH = "%s\\vue" % PLUGIN_OPENSOURCE
VUE_I18N_PATH = "%s\\vue-i18n" % PLUGIN_OPENSOURCE

SYSTEM_DATA_SQLITE_CORE_SOFT_NAME = "system.data.sqlite.core.1.0.109.nupkg"
CEFSHARP_COMMON_SOFT_NAME = "cefsharp.common.73.1.130.nupkg"
CEFSHARP_WINFORMS_SOFT_NAME = "cefsharp.winforms.73.1.130.nupkg"
NLOG_SOFT_NAME = "nlog.4.5.11.nupkg"
CEF_REDIST_X86_SOFT_NAME = "cef.redist.x86.73.1.13.nupkg"
NEWTONSOFT_JSON_SOFT_NAME = "newtonsoft.json.12.0.2.nupkg"
VISUAL_STUDIO_SOFT_NAME = "CRT OF VISUAL STUDIO 2017 Enterprise.rar"
CHART_JS_SOFT_NAME = "Chart.js-2.7.3.zip"
CHART_JS_VERSION = "2.7.3"
ELEMENT_UI_SOFT_NAME = "element-ui-2.11.1.jar"
ELEMENT_UI_VERSION = "2.11.1"
JQUERY_JAVASCRIPT_LIBRARY_SOFT_NAME = "jquery-3.4.1.zip"
JQUERY_JAVASCRIPT_LIBRARY_VERSION = "3.4.1"
LODASH_SOFT_NAME = "lodash-4.17.15.tar.gz"
LODASH_VERSION = "4.17.15"
POLYFILL_SRC_SOFT_NAME = "polyfill-0.1.42-src.zip"
POLYFILL_SOFT_NAME = "polyfill-0.1.42.zip"
POLYFILL_VERSION = "0.1.42"
VUE_SOFT_NAME = "vue-2.6.6.jar"
VUE_VERSION = "2.6.6"
VUE_I18N_SOFT_NAME = "vue-i18n-8.9.0.zip"
VUE_I18N_VERSION = "8.9.0"

INDEX_CSS_PATCH = "%s\\element-ui\\huawei_patch\\huawei_index.css_001.patch" % PLUGIN_OPENSOURCE
global workspace
workspace = None


def unzip_tar_rar(zip_tar_rar_path, specified_dfs=None, dst_path=None):
    """
    Function: open_source or vendor下.nupkg .zip .jar .tar.gz .rar文件所在的文件夹路径
    Args:
              zip_tar_path  (str): open_source or vendor下.nupkg .zip .jar .tar.gz .rar文件所在的文件夹路径
              specified_dfs (list): zip中的文件列表
              dst_path (str): 目的文件
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁 bwx473592
    Date:2020/02/14
    """
    try:
        # 重命名
        create_dir(dst_path)
        if str(zip_tar_rar_path).endswith(".tar.gz"):
            untargz(zip_tar_rar_path, specified_dfs, dst_path)
        elif str(zip_tar_rar_path).endswith(".rar"):
            unrar(zip_tar_rar_path, dst_path)
        elif str(zip_tar_rar_path).endswith(".nupkg") or str(zip_tar_rar_path).endswith(".zip") or str(
                zip_tar_rar_path).endswith(".jar"):
            unzip(zip_tar_rar_path, specified_dfs, dst_path)
        else:
            return
    except Exception as e:
        logging.exception(str(e))
        exit(-1)


def unrar(zip_tar_rar_path, dst_path):
    """
    Function: 用  WinRAR.exe open_source or vendor下.rar文件所在的文件夹路径
    Args:
              zip_tar_rar_path (str): open_source or vendor下.rar文件
              dst_path (str): 解压到的目的路径
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁 bwx473592
    Date:2020/03/17
    """
    try:
        before_path = os.getcwd()
        os.chdir(dst_path)
        unrar_cmd = "start /wait %s x \"%s\"  .\\" % (
            "WinRAR", zip_tar_rar_path)
        print(unrar_cmd)
        os.system(unrar_cmd)
        os.chdir(before_path)
    except Exception as e:
        logging.exception(str(e))
        exit(-1)


def untargz(zip_tar_rar_path, specified_dfs, dst_path):
    """
    Function: 解压open_source or vendor下.tar.gz中的文件到指定目录
    Args:
              zip_tar_rar_path (str):tar.gz 文件
              specified_dfs (str): tar.gz中的文件
              dst_path (str): 目的文件
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁 bwx473592
    Date:2020/03/17
    """
    tar_file_obj = None
    try:
        tar_file_obj = tarfile.open(zip_tar_rar_path)
        if specified_dfs is None:
            tar_file_obj.extractall(path=dst_path)
        for specified_df in specified_dfs:
            for file in tar_file_obj.getnames():
                if str(file).find(specified_df) >= 0:
                    tar_file_obj.extract(file, dst_path)
    except Exception as e:
        logging.exception(str(e))
        exit(-1)
    finally:
        if tar_file_obj is not None:
            tar_file_obj.close()


def unzip(zip_tar_rar_path, specified_dfs, dst_path):
    """
    Function: open_source or vendor下.nupkg .zip .jar文件所在的文件夹路径
    Args:
              zip_tar_rar_path  (str): open_source or vendor下.nupkg .zip .jar文件
              specified_dfs (list): 指定zip中的文件列表
              dst_path (str): 目的文件
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁 bwx473592
    Date:2020/03/17
    """
    zip_file_obj = None
    zip_file_path = None
    flag = False
    try:
        file_name = os.path.basename(zip_tar_rar_path)
        input_dir_path = os.path.dirname(zip_tar_rar_path)
        portion = os.path.splitext(file_name)
        if portion[1] == ".nupkg":
            nupkg_file_name = portion[0] + ".zip"
            nupkg_file_path = os.path.join(input_dir_path, file_name)
            zip_file_path = os.path.join(input_dir_path, nupkg_file_name)
            re_name(nupkg_file_path, zip_file_path)
            flag = True
        else:
            zip_file_path = zip_tar_rar_path
        if zip_file_path is None:
            print("unzip failed %s" % file_name)
            exit(-1)
        zip_file_obj = zipfile.ZipFile(zip_file_path, 'r')
        if specified_dfs is None:
            zip_file_obj.extractall(path=dst_path)
        for specified_df in specified_dfs:
            for file in zip_file_obj.namelist():
                if str(file).find(specified_df) >= 0:
                    zip_file_obj.extract(file, path=dst_path)
    except Exception as e:
        logging.exception(str(e))
        exit(-1)
    finally:
        if zip_file_obj is not None:
            zip_file_obj.close()
        if flag:
            re_name(zip_file_path, nupkg_file_path)


def re_name(source_path, dst_path):
    """
    Function: 文件重命名
    Args:
              source_path            (str):   源文件
              dst_path               (str):   目标文件
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁 bwx473592
    Date:2020/03/18
    """
    try:
        if os.path.exists(source_path):
            if os.path.exists(dst_path):
                os.remove(dst_path)
            os.rename(source_path, dst_path)
    except Exception as e:
        logging.exception(str(e))
        print(str(e))
        exit(-1)


def create_dir(dir_path):
    """
    Function: 创建文件夹
    Args:
              dir_path            (str):   需要被创建的文件夹路径
    Returns:
         dir_path
    Raises:
        None
    Examples:
         None
    Author:  白爱洁 bwx473592
    Date:2020/03/18
    """
    try:
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
    except Exception as e:
        logging.exception(str(e))
        print(str(e))
        exit(-1)
    return dir_path


def exe_copy_cmd(source_file, dir_path):
    """
     Function: 执行copy命令
    Args:
              source_file       (str):   被copy的文件
              dir_path          (str):   目标文件夹
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁 bwx473592
    Date:2020/03/18
    """
    try:
        command = "xcopy \"%s\" \"%s\" /E /Y /I /R" % (source_file, dir_path)
        os.system(command)
    except Exception as e:
        logging.exception(str(e))
        exit(-1)


def exect_patch_cmd(command, cwd_ath):
    """
    Function：
        执行patch命令
    Args:
              cmd            (str):   windows 或者 linux 可执行的命令
              cwd_ath        (str):   执行命令的目录
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁/bwx473592
    Date:2020/03/18
    """
    try:
        ret = subprocess.Popen(command, cwd=cwd_ath, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout_err = ret.communicate()
        code = ret.returncode
        if code != 0:
            print('error: path: %s command:%s failed !' % (cwd_ath, command))
            print('beacuse: %s' % str(stdout_err))
            exit(-1)
        else:
            print('path: %s command:%s successfully !' % (cwd_ath, command))
    except Exception as e:
        print('error: path: %s command:%s failed !' % (cwd_ath, command))
        logging.exception('beacuse: %s' % str(e))
        exit(-1)


def del_dir(dir_path):
    """
    Function： 删除文件夹
    Args:
              dir_path            (str):   被删除的目录
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁/bwx473592
    Date:2020/03/18
    """
    try:
        if os.path.exists(dir_path):
            shutil.rmtree(dir_path)
    except Exception as e:
        print(str(e))
        logging.exception('beacuse: %s' % str(e))
        exit(-1)


def unzip_all(package_name, specify_dfs, dst_path):
    """
    Function： 解压文件入口
    Args:
              package_name            (str):   源包
              specify_dfs             （list）：源包中的文件列表
              dst_path               (str)：目标路径
    Returns:
         None
    Raises:
        None
    Examples:
         None
    Author:  白爱洁/bwx473592
    Date:  2020/03/18
    """
    try:
        tmp = os.path.join(workspace, "tmp")
        unzip_tar_rar(package_name, specify_dfs, tmp)
        create_dir(dst_path)
        for specify_df in specify_dfs:
            file_path = "%s" % specify_df.replace("/", "\\")
            file_path = os.path.join(tmp, file_path)
            if os.path.isdir(file_path):
                file_path = "%s*" % file_path
            print(file_path)
            print(dst_path)
            exe_copy_cmd(file_path, dst_path)
        del_dir(tmp)
    except Exception as e:
        print(str(e))
        logging.exception('beacuse: %s' % str(e))
        exit(-1)


if __name__ == "__main__":
    try:
        workspace = sys.argv[1]
        index_css_patch = os.path.join(workspace, INDEX_CSS_PATCH)

        specify_dfs = ["lib/net45/"]
        # Newtonsoft.json
        json_package_path = os.path.join(workspace, NEWTONSOFT_JSON_PATH)
        json_nupkg_path = os.path.join(json_package_path, NEWTONSOFT_JSON_SOFT_NAME)
        unzip_all(json_nupkg_path, specify_dfs, json_package_path)

        # NLog - Advanced .NET Logging
        nlog_package_path = os.path.join(workspace, NLOG_ADVANCED_NET_LOGGING_PATH)
        nlog_nupkg_path = os.path.join(nlog_package_path, NLOG_SOFT_NAME)
        unzip_all(nlog_nupkg_path, specify_dfs, nlog_package_path)

        # CefSharp
        cefsharp_package_path = os.path.join(workspace, CEFSHARP_PATH)
        cef_x86_nupkg_path = os.path.join(cefsharp_package_path, CEF_REDIST_X86_SOFT_NAME)
        specify_dfs = ["CEF/"]
        dst_path = os.path.join(cefsharp_package_path, "CEF")
        unzip_all(cef_x86_nupkg_path, specify_dfs, dst_path)

        # CefSharp.Common
        common_dst_path = os.path.join(cefsharp_package_path, "CefSharp.Common")
        common_nupkg_path = os.path.join(cefsharp_package_path, CEFSHARP_COMMON_SOFT_NAME)
        specify_dfs = ["build/", "CefSharp/x86/"]
        unzip_all(common_nupkg_path, specify_dfs, common_dst_path)

        # CefSharp.WinForms
        winforms_dst_path = os.path.join(cefsharp_package_path, "CefSharp.WinForms")
        winforms_nupkg_path = os.path.join(cefsharp_package_path, CEFSHARP_WINFORMS_SOFT_NAME)
        specify_dfs = ["build/", "CefSharp/x86/"]
        unzip_all(winforms_nupkg_path, specify_dfs, winforms_dst_path)

        # chart.js
        chart_package_path = os.path.join(workspace, CHART_JS_PATH)
        chart_zip_path = os.path.join(chart_package_path, CHART_JS_SOFT_NAME)
        chart_dst_path = os.path.join(workspace, "src\\Client\\fd-plugin-webapp\\scripts\\")
        specify_dfs = ["Chart.js-%s/dist/Chart.bundle.min.js" % CHART_JS_VERSION]
        unzip_all(chart_zip_path, specify_dfs, chart_dst_path)

        webapp_path = os.path.join(workspace, "src\\Client\\fd-plugin-webapp")
        css_path = os.path.join(webapp_path, "css")
        css_fonts_path = os.path.join(css_path, "fonts")
        scripts_path = os.path.join(webapp_path, "scripts")
        i18n_path = os.path.join(scripts_path, "i18n")

        # element-ui
        # element-icons.ttf element-icons.woff
        element_package_path = os.path.join(workspace, ELEMENT_UI_PATH)
        element_jar_path = os.path.join(element_package_path, ELEMENT_UI_SOFT_NAME)
        ttf = "META-INF/resources/webjars/element-ui/%s/lib/theme-chalk/fonts/element-icons.ttf" % ELEMENT_UI_VERSION
        woff = "META-INF/resources/webjars/element-ui/%s/lib/theme-chalk/fonts/element-icons.woff" % ELEMENT_UI_VERSION
        specify_dfs = [ttf, woff]
        unzip_all(element_jar_path, specify_dfs, css_fonts_path)

        # en.js, zh-CN.js
        en = "META-INF/resources/webjars/element-ui/%s/lib/umd/locale/en.js" % ELEMENT_UI_VERSION
        zh_cn = "META-INF/resources/webjars/element-ui/%s/lib/umd/locale/zh-CN.js" % ELEMENT_UI_VERSION
        specify_dfs = [en, zh_cn]
        unzip_all(element_jar_path, specify_dfs, i18n_path)

        # index.css
        index_css = "META-INF/resources/webjars/element-ui/%s/lib/theme-chalk/index.css" % ELEMENT_UI_VERSION
        specify_dfs = [index_css]
        unzip_all(element_jar_path, specify_dfs, css_path)
        # 执行index.css.patch
        exect_patch_cmd("patch -i \"%s\"" % index_css_patch, css_path)
        index_css_path = os.path.join(css_path, "index.css")
        element_css_path = os.path.join(css_path, "element.css")
        re_name(index_css_path, element_css_path)

        # index.js
        index_js = "META-INF/resources/webjars/element-ui/%s/lib/index.js" % ELEMENT_UI_VERSION
        specify_dfs = [index_js]
        unzip_all(element_jar_path, specify_dfs, scripts_path)
        index_js_path = os.path.join(scripts_path, "index.js")
        element_js_path = os.path.join(scripts_path, "element.js")
        re_name(index_js_path, element_js_path)

        # vue-i18n
        i18n_package_path = os.path.join(workspace, VUE_I18N_PATH)
        i18n_zip_path = os.path.join(i18n_package_path, VUE_I18N_SOFT_NAME)
        specify_dfs = ["vue-i18n-%s/dist/vue-i18n.js" % VUE_I18N_VERSION]
        unzip_all(i18n_zip_path, specify_dfs, i18n_path)

        # jQuery JavaScript Library
        jquery_package_path = os.path.join(workspace, JQUERY_JAVASCRIPT_LIBRARY_PATH)
        jquery_zip_path = os.path.join(jquery_package_path, JQUERY_JAVASCRIPT_LIBRARY_SOFT_NAME)
        specify_dfs = ["jquery-%s/dist/jquery.min.js" % JQUERY_JAVASCRIPT_LIBRARY_VERSION]
        unzip_all(jquery_zip_path, specify_dfs, scripts_path)

        # lodash
        lodash_package_path = os.path.join(workspace, LODASH_PATH)
        lodash_tar_path = os.path.join(lodash_package_path, LODASH_SOFT_NAME)
        specify_dfs = ["lodash-%s/dist/lodash.min.js" % LODASH_VERSION]
        unzip_all(lodash_tar_path, specify_dfs, scripts_path)

        # polyfill
        polyfill_package_path = os.path.join(workspace, POLYFILL_PATH)
        src_zip_path = os.path.join(polyfill_package_path, POLYFILL_SRC_SOFT_NAME)
        specify_dfs = [POLYFILL_SOFT_NAME]
        unzip_all(src_zip_path, specify_dfs, polyfill_package_path)
        zip_path = os.path.join(polyfill_package_path, POLYFILL_SOFT_NAME)
        specify_dfs = ["polyfill-%s/polyfill.min.js" % POLYFILL_VERSION]
        unzip_all(zip_path, specify_dfs, scripts_path)

        # vue
        vue_package_path = os.path.join(workspace, VUE_PATH)
        vue_jar_path = os.path.join(vue_package_path, VUE_SOFT_NAME)
        specify_dfs = ["META-INF/resources/webjars/vue/%s/dist/vue.js" % VUE_VERSION]
        unzip_all(vue_jar_path, specify_dfs, scripts_path)

        # System.Data.SQLite
        sqlite_package_path = os.path.join(workspace, SYSTEM_DATA_SQLITE_PATH)
        sqlite_nupkg_path = os.path.join(sqlite_package_path, SYSTEM_DATA_SQLITE_CORE_SOFT_NAME)
        specify_dfs = ["lib/net45/"]
        unzip_all(sqlite_nupkg_path, specify_dfs, sqlite_package_path)
        specify_dfs = ["build/net45/x86/"]
        sqlite_x86_path = os.path.join(sqlite_package_path, "x86")
        unzip_all(sqlite_nupkg_path, specify_dfs, sqlite_x86_path)

        # Distributable Code for VISUAL STUDIO 2017 PROFESSIONAL AND TRIAL EDITION
        visual_studio_path = os.path.join(workspace, VISUAL_STUDIO_PATH)
        visual_rar_path = os.path.join(visual_studio_path, VISUAL_STUDIO_SOFT_NAME)
        specify_dfs = [
            "crt/Microsoft Visual Studio/2017/Enterprise/VC/Redist/MSVC/14.16.27012/x86/Microsoft.VC141.CRT/"]
        vc_path = os.path.join(workspace, "%s\\%s" % (VENDOR, "VC++"))
        unzip_all(visual_rar_path, specify_dfs, vc_path)
    except Exception as e:
        logging.exception(str(e))
        exit(-1)
    exit(0)
